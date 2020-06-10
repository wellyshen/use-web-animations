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
  margin: 0 0 2.5rem;
`;

export const frame = css`
  display: flex;
  align-items: center;
  margin-top: 2.5rem;
  padding: 10px;
  width: 320px;
  height: 100px;
  border: 1px solid #777;
`;

export const target = css`
  width: 50px;
  height: 50px;
  background: red;
  z-index: 1;
`;

export const fakeTarget = css`
  position: absolute;
  opacity: 0.25;
`;
