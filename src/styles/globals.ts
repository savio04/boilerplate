import { createGlobalStyle } from 'styled-components'

export const GloblStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%; //resize
}

html,body,#__next{
  height: 100%;
}

body{
  font-family: 'Poppins', sans-serif;
}
`
