"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const HelloBtn = () => {
  return <button onClick={() => alert(`Helloapp!`)}></button>;
};
