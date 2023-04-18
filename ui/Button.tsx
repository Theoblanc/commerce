"use client";

import classNames from "classnames";
import { PropsWithChildren, useId } from "react";

type ButtonProps = PropsWithChildren<{
  type?: "primary" | "danger" | "light" | "dark";
  full?: boolean;
  size?: "xs" | "s";
  textColor?: "primary" | "light";

  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}>;

export default function Button(props: ButtonProps) {
  const {
    type,
    size,
    full,
    textColor,
    className,
    disabled,
    onClick,
    children,
  } = props;
  const buttonId = useId();

  return (
    <button
      id={buttonId}
      className={classNames(
        {
          [`bg-${type}`]: type ? true : false,
          [`w-full`]: full,
        },
        "h-12",
        "rounded-xl",
        "focus:outline-none border",
        "border-gray-200",
        "hover:bg-gray-100",
        "focus:z-10",
        "focus:ring-1",
        "font-medium",
        "focus:ring-gray-200",
        "group",
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <span
        className={classNames(
          {
            [`text-${textColor}`]: textColor ? true : false,
            [`text-${size}`]: size,
          },
          "group-hover:text-dark"
        )}
      >
        {children}
      </span>
    </button>
  );
}
