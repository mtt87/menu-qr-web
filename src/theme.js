import baseTheme from '@rebass/preset';

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: '#035aa6',
  },
  forms: {
    input: {
      bg: '#f2f2f2',
      borderColor: 'transparent',
    },
  },
  buttons: {
    outline: {
      ...baseTheme.buttons.outline,
      borderColor: 'primary',
      borderWidth: 2,
      borderStyle: 'solid',
      cursor: 'pointer',
      boxShadow:
        '0 0.063em 0.313em 0 rgba(0,0,0,.07), 0 0.438em 1.063em 0 rgba(0,0,0,.1)',
    },
    primary: {
      ...baseTheme.buttons.primary,
      cursor: 'pointer',
      boxShadow:
        '0 0.063em 0.313em 0 rgba(0,0,0,.07), 0 0.438em 1.063em 0 rgba(0,0,0,.1)',
    },
    xxl: {
      variant: 'buttons.primary',
      px: 4,
      borderRadius: 8,
    },
  },
};
