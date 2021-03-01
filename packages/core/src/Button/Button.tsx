import React, { forwardRef } from 'react';
import MuiButton, { ButtonProps as MuiProps } from '@material-ui/core/Button';
import { useTheme, createMuiTheme, PropTypes, ThemeProvider } from '@material-ui/core';

type ColorType = PropTypes.Color | 'success' | 'error' | 'info' | 'warning';

type ButtonRef = HTMLButtonElement;

const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
    const { color, ...other } = props;
    const isVariant = !!(color === 'success' || color === 'error' || color === 'info' || color === 'warning');
    const colors = (value?: ColorType) => (isVariant ? 'primary' : value) as PropTypes.Color;
    let theme = useTheme();

    if (color === 'success') {
        theme = createMuiTheme({ palette: { primary: theme.palette.success } });
    }

    if (color === 'error') {
        theme = createMuiTheme({ palette: { primary: theme.palette.error } });
    }

    if (color === 'info') {
        theme = createMuiTheme({ palette: { primary: theme.palette.info } });
    }

    if (color === 'warning') {
        theme = createMuiTheme({ palette: { primary: theme.palette.warning } });
    }

    return (
        <ThemeProvider theme={theme}>
            <MuiButton color={colors(color)} {...other} ref={ref} />
        </ThemeProvider>
    );
});

export interface ButtonProps extends Omit<MuiProps, 'color'> {
    color?: ColorType;
}

export default Button;
