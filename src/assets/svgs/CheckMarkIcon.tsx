import { SVGProps } from "react";

export const CheckMarkIcon = ({
  color = "#84CC16",
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="11"
      viewBox="0 0 16 11"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M5.7276 8.2737L14.0004 0L15.2739 1.2726L5.7276 10.8189L0 5.0913L1.2726 3.8187L5.7276 8.2737Z"
        fill={color}
      />
    </svg>
  );
};
