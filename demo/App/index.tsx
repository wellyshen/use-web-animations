import React, { FC } from "react";
import { Global, css } from "@emotion/core";
import normalize from "normalize.css";

import GitHubCorner from "../GitHubCorner";
import Main from "../Main";
import Animate from "../Animate";
import { root } from "./styles";

const App: FC = () => {
  return (
    <>
      <Global
        styles={css`
          ${normalize}
          ${root}
        `}
      />
      <GitHubCorner url="https://github.com/wellyshen/use-web-animations" />
      <Main />
      <Animate />
    </>
  );
};

export default App;
