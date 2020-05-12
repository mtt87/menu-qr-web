import baseTheme from '@rebass/preset';

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: '#6886c5',
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
      cursor: 'pointer',
    },
    primary: {
      ...baseTheme.buttons.primary,
      cursor: 'pointer',
    },
  },
};
