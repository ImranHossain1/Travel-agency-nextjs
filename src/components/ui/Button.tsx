"use client";
import React from "react";
import { Button as AntButton } from "antd";
import { revalidateTag } from "next/cache";
const Button = ({
  children,
  props,
}: {
  children: React.ReactNode;
  props?: any;
}) => {
  return (
    <AntButton
      onClick={() => {
        revalidateTag("bus-schedule");
      }}
      {...props}
    >
      {children}
    </AntButton>
  );
};

export default Button;
