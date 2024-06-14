import {UseFormRegister} from "react-hook-form";
import './selectLine.scss'

type SelectLineProps = {
    title: string
    name: string
    register: UseFormRegister<any>
    options: { value: string, label: string }[]
    currentValue: string
    changed: boolean
}

export const SelectLine = ({name, options, title, register, currentValue, changed = false}: SelectLineProps) => {

    return (
        <div className={'form__line'}>
            <span>{title}</span>
            <select defaultValue={currentValue} {...register(name)} id={name}>
                {options.map((el, i) => {
                    return (
                        <option key={i} value={el.value}>{el.label}</option>
                    )
                })}
            </select>
            {changed && <span className={'changed-line'}>Данные обновлены,но еще не отправлены</span>}
        </div>
    );
};

