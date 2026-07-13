import { SVGProps } from "react";

export const BankCardOutlineIcon = ({
  color = "#FF3155",
  width = 18,
  height = 17,
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 17"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M0.9 0H17.1C17.3387 0 17.5676 0.0948211 17.7364 0.263604C17.9052 0.432387 18 0.661305 18 0.9V15.3C18 15.5387 17.9052 15.7676 17.7364 15.9364C17.5676 16.1052 17.3387 16.2 17.1 16.2H0.9C0.661305 16.2 0.432387 16.1052 0.263604 15.9364C0.0948211 15.7676 0 15.5387 0 15.3V0.9C0 0.661305 0.0948211 0.432387 0.263604 0.263604C0.432387 0.0948211 0.661305 0 0.9 0ZM16.2 7.2H1.8V14.4H16.2V7.2ZM16.2 5.4V1.8H1.8V5.4H16.2ZM10.8 10.8H14.4V12.6H10.8V10.8Z"
        fill={color}
      />
    </svg>
  );
};
