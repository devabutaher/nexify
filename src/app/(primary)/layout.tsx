import Navbar from "@/components/Navbar/Navbar";
import React, { PropsWithChildren } from "react";

const PrimaryLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default PrimaryLayout;
