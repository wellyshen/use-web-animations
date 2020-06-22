import { css } from "@emotion/core";

import mq from "../utils/mq";

const { sm, md, lg } = mq;

export const root = css`
  body {
    font-family: "Open Sans", sans-serif;
  }
`;

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 5rem 5%;
  color: #fff;
  background: #000;
  ${sm} {
    padding-left: 10%;
    padding-right: 10%;
  }
  ${md} {
    padding-left: 12.5%;
    padding-right: 12.5%;
  }
  ${lg} {
    padding-left: 15%;
    padding-right: 15%;
  }
`;

export const title = css`
  margin: 0 0 0.75rem;
  text-align: center;
`;

export const subtitle = css`
  margin: 0 0 5rem;
`;

export const mask = css`
  position: relative;
  width: 87vw;
  overflow-x: hidden;
  ${md} {
    width: 29rem;
  }
`;

export const block = css`
  position: absolute;
  height: 100%;
  background: #fff;
`;

export const text = css`
  font-family: "Bowlby One SC", cursive;
  font-size: 12vw;
  opacity: 0;
  ${md} {
    font-size: 4rem;
  }
`;

export const heart = css`
  position: absolute;
  top: 100%;
  margin-left: 1rem;
  font-size: 9vw;
  color: #f00;
  ${md} {
    font-size: 3rem;
  }
`;
