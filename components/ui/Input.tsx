import { cva, type VariantProps } from "class-variance-authority";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {}

const input = cva("input", {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
});
export default function Input(props: InputProps) {
  const { id, ...rest } = props;
  return <input id={id} {...rest}></input>;
}
