import { SVGProps } from "react";

export const FlowerOutlineIcon = ({
  color = "#F97316",
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M3.6 0C6.741 0 9.3447 2.2986 9.8217 5.3055C10.8792 4.2516 12.339 3.6 13.95 3.6H18V5.85C18 9.081 15.381 11.7 12.15 11.7H9.9V16.2H8.1V9H6.3C2.8206 9 0 6.1794 0 2.7V0H3.6ZM16.2 5.4H13.95C11.7135 5.4 9.9 7.2135 9.9 9.45V9.9H12.15C14.3865 9.9 16.2 8.0865 16.2 5.85V5.4ZM3.6 1.8H1.8V2.7C1.8 5.1849 3.8151 7.2 6.3 7.2H8.1V6.3C8.1 3.8151 6.0849 1.8 3.6 1.8Z"
        fill={color}
      />
    </svg>
  );
};
