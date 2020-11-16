import { css } from "@emotion/react";

import mq from "../utils/mq";

const { sm, md, lg } = mq;

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 5%;
  text-align: center;
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
  font-size: 2rem;
`;

export const subtitle = css`
  margin: 0 0 5rem;
`;
