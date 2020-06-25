import { css } from "@emotion/core";

import mq from "../utils/mq";

const { sm, md, lg } = mq;

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
  margin: 0;
`;

export const subtitle = css`
  margin-bottom: 0.75rem 0 5rem;
`;

export const mask = css`
  position: relative;
  margin-bottom: 2.5rem;
  width: 87vw;
  overflow: hidden;
  user-select: none;
  ${md} {
    width: 29rem;
  }
`;

export const block = css`
  position: absolute;
  height: 100%;
  background: #fff;
`;

export const txt = css`
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

export const btn = css`
  padding: 0.35rem 0.5rem;
  border: 1px solid #fff;
  color: #fff;
  background: none;
  cursor: pointer;
  &:not(:first-of-type) {
    margin-left: -1px;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
  &:focus {
    outline: none;
  }
`;

export const slider = css`
  position: relative;
  margin-top: 1.5rem;
  width: 100%;
  background: none;
  -webkit-appearance: none;
  &:focus {
    border: none;
    outline: none;
  }
  &::-moz-range-track {
    height: 1px;
    background: #fff;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 21px;
    height: 21px;
    border: none;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }
  &::after {
    content: "";
    position: absolute;
    top: 10px;
    width: 100%;
    height: 1px;
    background: #fff;
    cursor: pointer;
  }
`;
