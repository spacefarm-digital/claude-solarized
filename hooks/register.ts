import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// Ethan Schoonover's Solarized palette, unchanged. https://ethanschoonover.com/solarized/
const SOLARIZED = {
  base03: '#002b36',
  base02: '#073642',
  base01: '#586e75',
  base00: '#657b83',
  base0: '#839496',
  base1: '#93a1a1',
  base2: '#eee8d5',
  base3: '#fdf6e3',
  yellow: '#b58900',
  orange: '#cb4b16',
  red: '#dc322f',
  magenta: '#d33682',
  violet: '#6c71c4',
  blue: '#268bd2',
  cyan: '#2aa198',
  green: '#859900',
} as const

// An editor theme sets comments in base1 on base3 (2.5:1) and base01 on base03
// (2.8:1). The app ignores a whole palette that has text under 3:1, so each
// text tone sits one step stronger on the same scale: base02, base01, base00
// on light, and base2, base1, base0 on dark.
const { theme } = makeColors({
  id: 'solarized',
  label: 'Solarized',
  roles: {
    accent: SOLARIZED.blue,
    danger: SOLARIZED.red,
    success: SOLARIZED.green,
    warning: SOLARIZED.yellow,
    pro: SOLARIZED.violet,
  },
  codeTheme: { light: 'solarized-light', dark: 'solarized-dark' },
  light: {
    gray: {
      anchors: {
        'surface-0': SOLARIZED.base3,
        'surface-1': SOLARIZED.base3,
        'surface-2': SOLARIZED.base3,
        'text-primary': SOLARIZED.base02,
        'text-secondary': SOLARIZED.base01,
        'text-muted': SOLARIZED.base00,
      },
    },
    git: {
      added: SOLARIZED.green,
      removed: SOLARIZED.red,
      modified: SOLARIZED.yellow,
      merged: SOLARIZED.violet,
      closed: SOLARIZED.magenta,
      conflicting: SOLARIZED.orange,
      draft: SOLARIZED.base01,
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': SOLARIZED.base03,
        'surface-1': SOLARIZED.base02,
        'surface-2': SOLARIZED.base02,
        'surface-3': SOLARIZED.base02,
        'text-primary': SOLARIZED.base2,
        'text-secondary': SOLARIZED.base1,
        'text-muted': SOLARIZED.base0,
      },
    },
    git: {
      added: SOLARIZED.green,
      removed: SOLARIZED.red,
      modified: SOLARIZED.yellow,
      merged: SOLARIZED.violet,
      closed: SOLARIZED.magenta,
      conflicting: SOLARIZED.orange,
      draft: SOLARIZED.base0,
    },
  },
})

const LOOK: ThemeSetArgs = { colors: theme }

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.theme.set(LOOK)

    return next(e)
  })
}
