import {UseFormRegister} from "react-hook-form";

type CheckboxLineProps = {
    name: string
    label: string
    register: UseFormRegister<any>
    changed: boolean
}

export const CheckboxLine = ({register, name, label, changed}: CheckboxLineProps) => {

    return (
        <div className={'form__line'}>
            <span>{label}</span>
            <input {...register(name)} type="checkbox"/>
            {changed && <span className={'changed-line'}>Данные обновлены,но еще не отправлены</span>}
        </div>
    );
};

