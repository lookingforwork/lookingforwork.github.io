import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      // xl:px-0
      className={`container p-8 mx-auto ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

