import React, { SyntheticEvent } from 'react';

import { Field, InputTypes } from '../field';
import classnames from 'classnames';

import './SearchForm.scss';

interface IProps {
    onSubmit: (value: string) => void;
    className: string;
}

interface IState {
    value: string;
}

export class SearchForm extends React.Component<IProps, IState>{
    public state = {
        value: ''
    };

    private onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
    };

    private changeHandler = (e: SyntheticEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        this.setState(state => ({...state, value}));
    };

    render() {
        const { value } = this.state;
        const classNames = classnames('search-form', this.props.className);

        return <form onSubmit={this.onSubmit} className={classNames}>
            <Field
                type={InputTypes.TEXT}
                value={value}
                placeholder={'Search'}
                onChange={this.changeHandler} />
        </form>;
    }
}
