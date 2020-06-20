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
  padding: 5rem 5%;
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
  width: 28rem;
`;

export const block = css`
  position: absolute;
  height: 100%;
  background: #000;
`;

export const text = css`
  font-size: 3rem;
  font-weight: bold;
  opacity: 0;
`;
