import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent, ReactNode,
} from 'react'
import s from './SuperSelect.module.css'
import {ArrType} from "../../HW7";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<ArrType>
    onChangeOption?: (option: number) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                         options,
                                                         className,
                                                         onChange,
                                                         onChangeOption,
                                                         ...restProps
                                                     }) => {
    const mappedOptions: ReactNode[] = options
        ? options.map((o) => (
            <option
                id={'hw7-option-' + o.id}
                className={s.option}
                key={o.id}
                value={o.id}
            >
                {o.value}
            </option>
        ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // делают студенты
        // если onChangeOption вообще существует, то...
        onChange && onChange(e)
        onChangeOption && onChangeOption(Number(e.currentTarget.value))
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
