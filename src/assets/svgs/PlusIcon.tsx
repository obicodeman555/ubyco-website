import { type SVGProps } from "react";

interface PlusIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

export const PlusIcon = ({ color = "#9CA3AF", ...props }: PlusIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={13}
      height={13}
      viewBox="0 0 13 13"
      fill="none"
      {...props}
    >
      <path
        d="M5.4 5.4V0H7.2V5.4H12.6V7.2H7.2V12.6H5.4V7.2H0V5.4H5.4Z"
        fill={color}
      />
    </svg>
  );
};
