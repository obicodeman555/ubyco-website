import { type SVGProps } from "react";

interface MinusIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

export const MinusIcon = ({ color = "#6B7280", ...props }: MinusIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="2"
      viewBox="0 0 13 2"
      fill="none"
      {...props}
    >
      <path d="M0 0H12.6V1.8H0V0Z" fill={color} />
    </svg>
  );
};
