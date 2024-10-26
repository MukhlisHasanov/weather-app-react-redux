import { Global, css } from "@emotion/react"

function GlobalStyles() {
  const globalAppStyles = css`
    @import url("https://fonts.google.com/share?selection.family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900|Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900");
    
    * {
      box-sizing: border-box;
      font-family: "Inter";
    }

    body,
    html {
      margin: 0;
      height: 100%;
    }

    #root {
      display: flex;
      min-height: 100%;
      flex-direction: column;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    li {
      margin: 0;
      padding: 0;
    }
  `

  return <Global styles={globalAppStyles} />
}

export default GlobalStyles
