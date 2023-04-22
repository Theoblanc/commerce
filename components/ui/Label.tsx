import { type VariantProps, cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    PropsWithChildren,
    VariantProps<typeof label> {}

const label = cva("label", {
  variants: {
    intent: {
      primary: ["text-primary"],
      secondary: [],
    },
    size: {
      small: ["text-sm", " font-medium"],
      medium: [],
    },
  },

  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});
export default function Label(props: LabelProps) {
  const { intent, size, className, children, ...rest } = props;
  return (
    <label className={label({ intent, size, className })} {...rest}>
      {children}
    </label>
  );
}
