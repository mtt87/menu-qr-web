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
        '0 0.250em 0.375em rgba(50,50,93,.09), 0 0.063em 0.188em rgba(0,0,0,.08)',
      ':hover': {
        boxShadow:
          '0 0.063em 0.313em 0 rgba(0,0,0,.07), 0 0.438em 1.063em 0 rgba(0,0,0,.1)',
      },
      height: 40,
    },
    primary: {
      ...baseTheme.buttons.primary,
      cursor: 'pointer',
      height: 40,
      boxShadow:
        '0 0.250em 0.375em rgba(50,50,93,.09), 0 0.063em 0.188em rgba(0,0,0,.08)',
      ':hover': {
        boxShadow:
          '0 0.063em 0.313em 0 rgba(0,0,0,.07), 0 0.438em 1.063em 0 rgba(0,0,0,.1)',
      },
      ':disabled': {
        cursor: 'default',
        opacity: 0.3,
      },
    },
    transparent: {
      variant: 'buttons.primary',
      height: 40,
      bg: 'transparent',
      color: 'primary',
      boxShadow: 'none',
    },
    xxl: {
      variant: 'buttons.primary',
      px: 4,
      borderRadius: 8,
      boxShadow:
        '0 0.250em 0.375em rgba(50,50,93,.09), 0 0.063em 0.188em rgba(0,0,0,.08)',
      ':hover': {
        boxShadow:
          '0 0.063em 0.313em 0 rgba(0,0,0,.07), 0 0.438em 1.063em 0 rgba(0,0,0,.1)',
      },
    },
  },
};
