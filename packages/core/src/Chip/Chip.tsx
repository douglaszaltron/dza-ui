import React, { forwardRef } from 'react';
import MuiChip, { ChipProps as MuiProps } from '@material-ui/core/Chip';
import { useTheme, createMuiTheme, PropTypes, ThemeProvider } from '@material-ui/core';

type ColorType = Exclude<PropTypes.Color, 'inherit'> | 'success' | 'error' | 'info';

type ChipRef = HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

const Chip = forwardRef<ChipRef, ChipProps>((props, ref) => {
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
            <MuiChip color={colors(color)} {...other} innerRef={ref} />
        </ThemeProvider>
    );
});

export interface ChipProps extends Omit<MuiProps, 'color'> {
    color?: ColorType;
}

export default Chip;
