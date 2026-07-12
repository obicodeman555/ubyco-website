import { SVGProps } from "react";

export const ArrowDownIcon = ({
  color = "#F9FAFB",
  width = "10",
  height = "6",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 10 6"
      fill="none"
      {...props}
    >
      <path
        d="M4.773 3.7125L8.4855 0L9.546 1.0605L4.773 5.8335L0 1.0605L1.0605 0L4.773 3.7125Z"
        fill={color}
      />
    </svg>
  );
};
