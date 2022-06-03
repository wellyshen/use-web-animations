import type { FC } from "react";

import GitHubCorner from "../GitHubCorner";
import Main from "../Main";
import Animate from "../Animations";
import "./styles.scss";

const App: FC = () => (
  <>
    <GitHubCorner url="https://github.com/wellyshen/use-web-animations" />
    <Main />
    <Animate />
  </>
);

export default App;
