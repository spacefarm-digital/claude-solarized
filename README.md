# Solarized for Claude

Solarized Light and Solarized Dark for the Claude desktop and mobile apps, built from
[Ethan Schoonover's Solarized palette](https://ethanschoonover.com/solarized/). One mod carries
both themes. It follows the app's light or dark mode, so there is nothing to switch.

The terminal and editor extensions keep their own colours. Permission prompts always keep the
app's own look.

## Install

At the prompt of a terminal session:

```
/plugin install solarized --marketplace spacefarm-digital/claude-solarized
```

Answer `y` to add the marketplace, then choose a scope. The user scope applies the theme to every
session.

From a shell:

```
claude plugin install solarized --marketplace spacefarm-digital/claude-solarized
```

In the desktop app, where `/plugin` does not run: click **+** next to the prompt box, then
**Plugins**, **Add marketplace** with `spacefarm-digital/claude-solarized`, then **Add plugin**.

## Palette

All 16 Solarized colours are used with their original values.

| Part of the app      | Solarized Light     | Solarized Dark      |
| -------------------- | ------------------- | ------------------- |
| Page                 | `base3` `#fdf6e3`   | `base03` `#002b36`  |
| Cards, panels, menus | `base3` `#fdf6e3`   | `base02` `#073642`  |
| Primary text         | `base02` `#073642`  | `base2` `#eee8d5`   |
| Secondary text       | `base01` `#586e75`  | `base1` `#93a1a1`   |
| Muted text           | `base00` `#657b83`  | `base0` `#839496`   |
| Accent               | `blue` `#268bd2`    | `blue` `#268bd2`    |
| Danger               | `red` `#dc322f`     | `red` `#dc322f`     |
| Success              | `green` `#859900`   | `green` `#859900`   |
| Warning              | `yellow` `#b58900`  | `yellow` `#b58900`  |
| Pro                  | `violet` `#6c71c4`  | `violet` `#6c71c4`  |

Git states use `green` (added), `red` (removed), `yellow` (modified), `violet` (merged),
`magenta` (closed) and `orange` (conflicting). Code blocks ask for the `solarized-light` and
`solarized-dark` highlighting themes.

### Two differences from an editor theme

- **Text is one step stronger.** An editor theme sets comments in `base1` on `base3` (2.5:1) and in
  `base01` on `base03` (2.8:1). The app ignores a whole palette that has text under 3:1, so each
  text tone moves one step along the same scale. Primary text is then 12:1 on the page in both
  modes, and muted text takes the tone an editor theme uses for body text.
- **Role colours keep their hue, not their exact value.** The app's design system derives the
  shades for buttons, badges and borders from each role colour and sets the lightness itself.

## Develop

`hooks/register.ts` holds the palette. `hooks/make-colors.js` comes from Claude Code and is not
edited by hand.

```
claude plugin validate .
claude plugin test .
```

## Credit

Solarized is the work of Ethan Schoonover. This mod is an independent port and is not affiliated
with him or with Anthropic.
