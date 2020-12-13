import React, { forwardRef } from 'react';
import MuiButton, { ButtonProps } from '@material-ui/core/Button';

type ButtonRef = HTMLButtonElement;

const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => <MuiButton {...props} ref={ref} />);

export default Button;
