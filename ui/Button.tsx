import { PropsWithChildren, useId } from "react";

type ButtonProps = PropsWithChildren<{
  type?: "primary" | "danger" | "light" | "dark";
  style?: "fill" | "outline" | "weak" | "flat";
  display?: "inline" | "block" | "full";

  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}>;

export default function Button(props: ButtonProps) {
  const { type, style, display, disabled, onClick, children } = props;
  const buttonId = useId();

  return (
    <button
      id={buttonId}
      className={`${type} ${display}`}
      disabled={disabled}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
}
