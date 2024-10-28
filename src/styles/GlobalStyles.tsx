import { Global, css } from "@emotion/react"

function GlobalStyles() {
  const globalAppStyles = css`
    @import url("https://fonts.googleapis.com/css?family=Inter");

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