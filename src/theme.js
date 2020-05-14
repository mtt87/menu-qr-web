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
      boxShadow: 'none',
      borderColor: 'primary',
      borderWidth: 2,
      borderStyle: 'solid',
      cursor: 'pointer',
    },
    primary: {
      ...baseTheme.buttons.primary,
      cursor: 'pointer',
    },
    xxl: {
      variant: 'buttons.primary',
      px: 4,
      borderRadius: 8,
    },
  },
};
