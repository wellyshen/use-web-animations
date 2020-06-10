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

export const banner = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  background: #aaa;
`;

export const cardWrapper = css`
  padding: 1rem;
`;

export const card = css`
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
  > div:first-of-type {
    margin-bottom: 0.5rem;
    height: 4rem;
    background: #ccc;
  }
  > div:last-of-type div {
    margin-bottom: 0.3rem;
    height: 0.5rem;
    background: #eee;
    &:last-of-type {
      width: 70%;
    }
  }
`;

export const page = css`
  position: relative;
  border: 1px solid #777;
`;

export const pageMD = css`
  .css-${card.name} {
    display: flex;
    > div:first-of-type {
      flex: 1;
      margin: 0 0.5rem 0 0;
    }
    > div:last-of-type {
      flex: 1;
    }
  }
`;

export const pageLG = css`
  .css-${banner.name} {
    margin: 1rem 1rem 0;
  }
  .css-${cardWrapper.name} {
    display: flex;
  }
  .css-${card.name} {
    flex: 1;
    &:not(:last-of-type) {
      margin-right: 0.5rem;
    }
  }
`;

export const content = css`
  height: 100%;
  overflow-y: scroll;
`;

export const controller = css`
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  border: 1px solid #777;
  cursor: nwse-resize;
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
`;
