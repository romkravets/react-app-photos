import React, { InputHTMLAttributes } from 'react';

import './Field.scss';

export enum InputTypes {
    TEXT = 'text',
    NUMBER = 'number',
    PASSWORD = 'password',
    PHONE = 'phone'
}

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    type: InputTypes;
}

export class Field extends React.PureComponent<IProps> {
    render() {
        const { type, ...restProps } = this.props;
        console.log(restProps);
        return <div className={'field'}>
            <input
                type={type}
                {...restProps}
                className={'field__native-input'}/>
        </div>
    }
}
