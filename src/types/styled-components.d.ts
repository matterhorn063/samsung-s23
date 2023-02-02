/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'

import {
  ThemedCssFunction,
} from 'styled-components'

import { theme } from '~/styles/theme'

declare module 'styled-components' {
  type Theme = typeof theme
  export interface ITheme extends Theme {
    // media queries
    deprecated_mediaWidth: {
      deprecated_upToExtraSmall: ThemedCssFunction<ITheme>
      deprecated_upToSmall: ThemedCssFunction<ITheme>
      deprecated_upToMedium: ThemedCssFunction<ITheme>
      deprecated_upToLarge: ThemedCssFunction<ITheme>
    }
  }
}
