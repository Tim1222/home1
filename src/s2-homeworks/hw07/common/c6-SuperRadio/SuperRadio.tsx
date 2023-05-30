import React, {ChangeEvent, DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, ReactNode,} from 'react'
import s from './SuperRadio.module.css'
import {Simulate} from "react-dom/test-utils";
import {ArrType} from "../../HW7";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: Array<ArrType>
    onChangeOption?: (option: number) => void

    spanProps?: DefaultSpanPropsType
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
                                                       id,
                                                       name,
                                                       className,
                                                       options,
                                                       value,
                                                       onChange,
                                                       onChangeOption,
                                                       spanProps,
                                                       ...restProps
                                                   }) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // делают студенты
        onChange && onChange(e)
        onChangeOption && onChangeOption(Number(e.currentTarget.value))
    }

    const finalRadioClassName = s.radio + (className ? ' ' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

    const mappedOptions: ReactNode[] = options
        ? options.map((o: ArrType) => (
            <label key={name + '-' + o.id} className={s.label}>
                <input
                    id={id + '-input-' + o.id}
                    className={finalRadioClassName}
                    type={'radio'}
                    // name, checked, value делают студенты
                    name={name}
                    checked={o.id === value}
                    value={o.id}
                    //http://htmlbook.ru/html/input/name

                    //...может попробовать значение которое тянем из HW7?
                    onChange={onChangeCallback}
                    {...restProps}
                />
                <span
                    id={id + '-span-' + o.id}
                    {...spanProps}
                    className={spanClassName}
                >
                      {o.value}
                  </span>
            </label>
        ))
        : []

    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
