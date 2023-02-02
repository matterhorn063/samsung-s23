import { css } from 'styled-components'

export const MEDIA_WIDTHS = {
  deprecated_upToExtraSmall: 500,
  deprecated_upToSmall: 720,
  deprecated_upToMedium: 960,
  deprecated_upToLarge: 1280,
}

const deprecated_mediaWidthTemplates: {
  [width in keyof typeof MEDIA_WIDTHS]: typeof css
} = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
    @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
      ${css(a, b, c)}
    }
  `
  return accumulator
}, {}) as any

export const theme = {
  colors: {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: '#6a6d72',
    bg1: 'rgb(51, 51, 51)',
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
  },
  spacing: {
    /** 1px */
    px: '1px',
    /** 0px */
    0: '0px',
    /** 2px */
    0.5: '0.125rem',
    /** 4px */
    1: '0.25rem',
    /** 6px */
    1.5: '0.375rem',
    /** 8px */
    2: '0.5rem',
    /** 10px */
    2.5: '0.625rem',
    /** 12px */
    3: '0.75rem',
    /** 14px */
    3.5: '0.875rem',
    /** 16px */
    4: '1rem',
    /** 20px */
    5: '1.25rem',
    /** 24px */
    6: '1.5rem',
    /** 28px */
    7: '1.75rem',
    /** 32px */
    8: '2rem',
    /** 36px */
    9: '2.25rem',
    /** 40px */
    10: '2.5rem',
    /** 44px */
    11: '2.75rem',
    /** 48px */
    12: '3rem',
    /** 56px */
    14: '3.5rem',
    /** 64px */
    16: '4rem',
    /** 80px */
    20: '5rem',
    /** 96px */
    24: '6rem',
    /** 112px */
    28: '7rem',
    /** 128px */
    32: '8rem',
    /** 144px */
    36: '9rem',
    /** 160px */
    40: '10rem',
    /** 176px */
    44: '11rem',
    /** 192px */
    48: '12rem',
    /** 208px */
    52: '13rem',
    /** 224px */
    56: '14rem',
    /** 240px */
    60: '15rem',
    /** 256px */
    64: '16rem',
    /** 288px */
    72: '18rem',
    /** 320px */
    80: '20rem',
    /** 384px */
    96: '24rem',
  },

  deprecated_mediaWidth: deprecated_mediaWidthTemplates,
}
