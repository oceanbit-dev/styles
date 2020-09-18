interface FontBase {
  fontFamily: string;
  // This matches the typings for `react-native` and should work for web as well
  fontWeight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

export const robotoCodeBase = {
  fontFamily: `"Roboto Mono", monospace`,
  fontWeight: 'normal' as const,
};

export const epilogueRegularBase = {
  fontFamily: `"Epilogue", sans-serif`,
  fontWeight: 'normal' as const,
};

export const epilogueSemiBoldBase = {
  fontFamily: `"Epilogue", sans-serif`,
  fontWeight: '600' as const,
};

export const epilogueBoldBase = {
  fontFamily: `"Epilogue", sans-serif`,
  fontWeight: 'bold' as const,
};

export const getTextStyles = (props?: {
  robotoCode: FontBase;
  epilogueRegular: FontBase;
  epilogueSemiBold: FontBase;
  epilogueBold: FontBase;
}) => {
  const {
    robotoCode = robotoCodeBase,
    epilogueRegular = epilogueRegularBase,
    epilogueSemiBold = epilogueSemiBoldBase,
    epilogueBold = epilogueBoldBase,
  } = props || {};

  return {
    display_01: {
      ...epilogueBold,
      fontSize: 48,
      lineHeight: 64,
      margin: 0,
    },

    display_02: {
      ...epilogueSemiBold,
      fontSize: 96,
      lineHeight: 128,
      margin: 0,
    },

    headline_01: {
      ...epilogueSemiBold,
      fontSize: 64,
      lineHeight: 80,
      margin: 0,
    },

    headline_01_mobile: {
      ...epilogueSemiBold,
      fontSize: 32,
      lineHeight: 40,
      margin: 0,
    },

    headline_02: {
      ...epilogueSemiBold,
      fontSize: 48,
      lineHeight: 56,
      margin: 0,
    },

    headline_02_mobile: {
      ...epilogueSemiBold,
      fontSize: 28,
      lineHeight: 40,
      margin: 0,
    },

    headline_03: {
      ...epilogueSemiBold,
      fontSize: 40,
      lineHeight: 48,
      margin: 0,
    },

    headline_03_mobile: {
      ...epilogueSemiBold,
      fontSize: 26,
      lineHeight: 36,
      margin: 0,
    },

    headline_04: {
      ...epilogueSemiBold,
      fontSize: 32,
      lineHeight: 40,
      margin: 0,
    },

    headline_04_mobile: {
      ...epilogueSemiBold,
      fontSize: 24,
      lineHeight: 32,
      margin: 0,
    },

    headline_05: {
      ...epilogueSemiBold,
      fontSize: 26,
      lineHeight: 32,
      margin: 0,
    },

    headline_05_mobile: {
      ...epilogueSemiBold,
      fontSize: 22,
      lineHeight: 28,
      margin: 0,
    },

    headline_06: {
      ...epilogueSemiBold,
      fontSize: 20,
      lineHeight: 28,
      margin: 0,
    },

    callout_01: {
      ...epilogueSemiBold,
      fontSize: 16,
      lineHeight: 24,
      margin: 0,
    },

    callout_02: {
      ...epilogueSemiBold,
      fontSize: 14,
      lineHeight: 20,
      margin: 0,
    },

    body_01: {
      ...epilogueRegular,
      fontSize: 16,
      lineHeight: 24,
      margin: 0,
    },

    body_02: {
      ...epilogueRegular,
      fontSize: 14,
      lineHeight: 20,
      margin: 0,
    },

    caption_01: {
      ...epilogueSemiBold,
      fontSize: 12,
      lineHeight: 16,
      margin: 0,
    },

    caption_02: {
      ...epilogueRegular,
      fontSize: 12,
      lineHeight: 16,
      margin: 0,
    },

    overline_01: {
      ...epilogueSemiBold,
      fontSize: 12,
      lineHeight: 16,
      margin: 0,
      textTransform: `lowercase` as const,
    },

    overline_02: {
      ...epilogueRegular,
      fontSize: 12,
      lineHeight: 16,
      margin: 0,
      textTransform: `lowercase` as const,
    },

    code: {
      ...robotoCode,
      fontSize: 12,
      lineHeight: 20,
      margin: 0,
    },
  };
};

export const textStyles = getTextStyles();
