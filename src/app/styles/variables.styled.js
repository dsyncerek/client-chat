export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
};

export const colors = {
  white: '#fff',
  black: '#000',
  red: '#ff4033',
  gray: '#ddd',
};

export const theme = {
  colors,
  breakpoints,

  colorTextDefault: colors.black,
  colorTextReversed: colors.white,
  colorBgDefault: colors.white,
  colorBgReversed: colors.black,
  colorPrimary: colors.red,

  fontSize: '16px',
  fontFamily: 'Ubuntu',
  gutter: 10,
  transitionTime: '.3s',
};
