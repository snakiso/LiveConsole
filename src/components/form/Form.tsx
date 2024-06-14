import {CheckboxLine} from "../checkboxLine/CheckboxLine.tsx";
import {InputLine} from "../inputLine/InputLine.tsx";
import {SelectLine} from "../selectLime/SelectLine.tsx";
import {DataChild} from "../../services/types.ts";
import {SubmitHandler, useForm} from "react-hook-form";
import './form.scss'
import {useCallback, useMemo} from "react";
import {createFormData} from "../../utils/createFormData.ts";

type FormProps = {
    data: DataChild
}

export const Form = ({data}: FormProps) => {
    const {register, handleSubmit, watch} = useForm<DataChild>({
        values: data
    })
    const originalData = useMemo(() => ({...data}), [data]);
    const changed = (name: string) => watch(name) != originalData[name];

    const onSubmit: SubmitHandler<DataChild> = useCallback(async (data) => {
        const formData = createFormData(data)
        await fetch('/api', {
            method: 'POST',
            body: formData,
        });
    }, []);


    return (
        <div className={'form-wrapper'}>
            <h2 className={'form-name'}>
                <a href="">{data.NAME}</a>
            </h2>
            <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
                <CheckboxLine register={register} name="ROOM_ACTIVE" label="Работает"
                              changed={changed('ROOM_ACTIVE')}
                />
                <InputLine register={register} name="TITLE_EVENT" label="Формат"
                           changed={changed("TITLE_EVENT")}/>
                <InputLine register={register} name="TITLE_NAME" label="Название"
                           changed={changed('TITLE_NAME')}/>
                <InputLine register={register} name="TITLE_TIME" label="Время"
                           changed={changed('TITLE_TIME')}/>
                <CheckboxLine register={register} name="CHAT_BLOCK_ACTIVE" label="Чат"
                              changed={changed("CHAT_BLOCK_ACTIVE")}/>
                <CheckboxLine register={register} name="PLAYER_BLOCK_ACTIVE" label="Плеер"
                              changed={changed("PLAYER_BLOCK_ACTIVE")}/>
                <InputLine register={register} name="PLAYER_BLOCK_LINK" label="Адрес плеера"
                           changed={changed("PLAYER_BLOCK_LINK")}/>
                <InputLine register={register} name="PLAYER_BLOCK_CAP" label="Адрес заглушки плеера"
                           changed={changed("PLAYER_BLOCK_CAP")}/>
                <SelectLine register={register} currentValue={data.VOTING_BLOCK_STATUS} title="Состояние голосовалки"
                            name="VOTING_BLOCK_STATUS"
                            changed={changed("VOTING_BLOCK_STATUS")}
                            options={data.VOTING_BLOCK_STATUS_LIST}/>
                <SelectLine register={register} currentValue={data.VOTING_BLOCK_ID.toString()} title="Голосовалка"
                            name="VOTING_BLOCK_ID"
                            changed={changed("VOTING_BLOCK_ID")}
                            options={data.VOTING_BLOCK_ID_LIST}/>
                <button className={'form__submit'}>Обновить</button>
            </form>
        </div>
    );
};

