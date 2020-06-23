import React, { FC } from "react";
import Github from "../icons/Github";

const Header: FC = () => (
  <div className="flex justify-end items-center mt-4 mb-20">
    <a
      className="flex items-center text-gray-900 text-sm font-bold py-4 block"
      href="https://github.com/wellyshen/use-web-animations"
      target="blank"
      rel="noopener"
    >
      <div className="w-5 h-5 mr-2">
        <Github />
      </div>
      View on GitHub
    </a>
    <a
      href="https://www.npmjs.com/package/@wellyshen/use-web-animations"
      className="bg-pink-500 rounded-md px-4 py-2 ml-8 shadow font-bold text-sm text-white"
      target="blank"
      rel="noopener"
    >
      Download v0.2.9
    </a>
  </div>
);

export default Header;
