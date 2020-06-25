import { css } from "@emotion/core";

export const link = css`
  color: #fff;
  &:hover {
    text-decoration: none;
  }
`;

export const target = css`
  width: 200px;
  height: 200px;
  border: none;
  border-radius: 4px;
  font-size: 5rem;
  background: #333;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
