import React, { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';

import './Button.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FunctionComponent<IProps> = ({ children, className, ...props }) => {
  return <button className={classnames('btn ', className)} {...props}>{ children }</button>
};
