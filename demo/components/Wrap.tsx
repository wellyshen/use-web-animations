import React, { FC } from "react";

const Wrap: FC = ({ children }: { children: React.ReactNode }) => (
  <div
    className={`
      max-w-screen-lg
      mx-auto
      px-4
      md:px-8
      text-center
    `}
  >
    {children}
  </div>
);

export default Wrap;
