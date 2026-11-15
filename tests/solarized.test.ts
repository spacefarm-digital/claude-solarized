import type { ThemeSetArgs } from 'claude-code'
import { expect, test } from 'claude-code/testing'

import { checkColors } from '../hooks/make-colors.js'

test('a session starts with both Solarized modes set', async ($, on) => {
  const sets: ThemeSetArgs[] = []

  // Nothing sits beneath the mod: these hooks stand for the engine.
  on('theme.set', (_, e) => {
    sets.push(e)

    return { value: { isDrawn: true, requestId: 'theme' } }
  })
  on('session.start', (_, e) => ({ cwd: e.cwd }))

  await $.session.start({ cwd: '/', surface: 'desktop', isInteractive: true })

  expect(sets.length).toBe(1)

  const colors = sets[0]?.colors

  expect(colors?.label).toBe('Solarized')
  expect(colors?.codeTheme).toEqual({ light: 'solarized-light', dark: 'solarized-dark' })

  // The page is base3 in light mode and base03 in dark mode.
  expect(colors?.inputs.light?.['gray-20']).toBe('#fdf6e3')
  expect(colors?.inputs.dark?.['gray-900']).toBe('#002b36')

  // The desktop app ignores a whole palette whose text is under 3:1.
  const refused = checkColors(colors).filter(line => line.startsWith("Desktop won't paint"))

  expect(refused).toEqual([])
})
