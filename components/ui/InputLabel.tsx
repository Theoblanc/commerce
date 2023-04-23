import { InputHTMLAttributes, PropsWithChildren } from "react";
import Input from "./Input";
import { cva, type VariantProps } from "class-variance-authority";

interface InputLabelProps
  extends InputHTMLAttributes<HTMLInputElement>,
    PropsWithChildren {
  intend: "primary" | "secondary";
}

export default function InputLabel(props: InputLabelProps) {
  const { id, children, ...rest } = props;
  return (
    <label htmlFor={id}>
      {children}
      <Input id={id} {...rest}></Input>
    </label>
  );
}
