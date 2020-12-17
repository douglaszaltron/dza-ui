import React, { forwardRef } from 'react';
import MuiBadge, { BadgeProps as MuiProps } from '@material-ui/core/Badge';
import { useTheme, createMuiTheme, PropTypes, ThemeProvider } from '@material-ui/core';

type ColorType = Exclude<PropTypes.Color, 'inherit'> | 'success' | 'error' | 'info';

type BadgeRef = HTMLDivElement;

const Badge = forwardRef<BadgeRef, BadgeProps>((props, ref) => {
    const { color, ...other } = props;
    const isVariant = !!(color === 'success' || color === 'error' || color === 'info');
    const colors = (value?: ColorType) => (isVariant ? 'primary' : value) as Exclude<PropTypes.Color, 'inherit'>;
    let theme = useTheme();

    if (color === 'error') {
        theme = createMuiTheme({ palette: { primary: theme.palette.error } });
    }
    if (color === 'success') {
        theme = createMuiTheme({ palette: { primary: theme.palette.success } });
    }
    if (color === 'info') {
        theme = createMuiTheme({ palette: { primary: theme.palette.info } });
    }

    return (
        <ThemeProvider theme={theme}>
            <MuiBadge color={colors(color)} {...other} ref={ref} />
        </ThemeProvider>
    );
});

export interface BadgeProps extends Omit<MuiProps, 'color'> {
    color?: ColorType;
}

export default Badge;
