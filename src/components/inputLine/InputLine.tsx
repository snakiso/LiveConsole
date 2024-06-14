import {UseFormRegister} from "react-hook-form";
import './inputLine.scss'

type InputLineProps = {
    name: string
    label: string
    register: UseFormRegister<any>
    changed: boolean
}

export const InputLine = ({name, label, register, changed = false}: InputLineProps) => {
    return (
        <div className={'form__line'}>
            <span>{label}</span>
            <input {...register(name)} type="text"/>
            {changed && <span className={'changed-line'}>Данные обновлены,но еще не отправлены</span>}
        </div>
    );
};

