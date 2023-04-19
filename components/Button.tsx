"use client";

import { useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Icons, IconType } from "./Icon";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "h-12",
        "bg-primary",
        "rounded-xl",
        "focus:outline-none border",
        "border-gray-200",
        "hover:bg-gray-100",
        "focus:z-10",
        "focus:ring-1",
        "font-medium",
        "focus:ring-gray-200",
        "hover:text-dark",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
      disabled: [
        "h-12",
        "bg-gray-100",
        "rounded-xl",
        "border-gray-200",
        "font-medium",
        "hover:text-dark",
        "opacity-50",
        "text-dark",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
      full: ["w-full", "text-light"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  icon: IconType;
}

export default function Button(props: ButtonProps) {
  const { className, intent, size, disabled, icon, children, ...rest } = props;
  const buttonId = useId();

  return (
    <button
      id={buttonId}
      className={button({ intent, size, className })}
      disabled={disabled}
      {...rest}
    >
      {icon && Icons[icon]}
      <span>{children}</span>
    </button>
  );
}
