/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import * as React from 'react'
import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './src/constant/theme'
// import GlobalStyles from './src/styles/GlobalStyles.css'
import { useWindowSize } from './src/hooks/useWindowSize'
// import { Typography } from './src/styles/Typography.css'

const App = ({ element }) => {
  const [width] = useWindowSize()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted) return null

  return (
    // <ThemeProvider theme={width < 1200 ? Theme.mobile : Theme.desktop}>
    <ThemeProvider theme={theme}>
      {/* <GlobalStyles />
      <Typography /> */}
      {element}
    </ThemeProvider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <App element={element} />
}