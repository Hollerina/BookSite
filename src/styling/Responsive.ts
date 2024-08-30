import { theme } from "./Themeing"

export const minXs = (styles: string): string =>
  `@media(min-width:${theme.screenSize.xs}){${styles}}`

export const minSm = (styles: string): string =>
  `@media(min-width:${theme.screenSize.sm}){${styles}}`

export const minMd = (styles: string): string =>
  `@media(min-width:${theme.screenSize.md}){${styles}}`

export const minLg = (styles: string): string =>
  `@media(min-width:${theme.screenSize.lg}){${styles}}`

export const minXl = (styles: string): string =>
  `@media(min-width:${theme.screenSize.xl}){${styles}}`

export const minXxl = (styles: string): string =>
  `@media(min-width:${theme.screenSize.xxl}){${styles}}`

export const maxXs = (styles: string): string =>
  `@media(max-width:${theme.screenSize.xs}){${styles}}`

export const maxSm = (styles: string): string =>
  `@media(max-width:${theme.screenSize.sm}){${styles}}`

export const maxMd = (styles: string): string =>
  `@media(max-width:${theme.screenSize.md}){${styles}}`

export const maxLg = (styles: string): string =>
  `@media(max-width:${theme.screenSize.lg}){${styles}}`

export const maxXl = (styles: string): string =>
  `@media(max-width:${theme.screenSize.xl}){${styles}}`

export const maxXxl = (styles: string): string =>
  `@media(max-width:${theme.screenSize.xxl}){${styles}}`
