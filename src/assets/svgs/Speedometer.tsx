import { SVGProps } from "react";

type SpeedoMeterIconProps = SVGProps<SVGSVGElement>;

export const SpeedoMeterIcon = ({
  width = 17,
  height = 15,
  fill = "#FF3155",
  ...props
}: SpeedoMeterIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 17 15"
      fill="none"
      {...props}
    >
      <path
        d="M15.3 8.49389C15.3 10.3703 14.5389 12.069 13.3084 13.2988L14.5104 14.5C16.0486 12.9629 17 10.8394 17 8.49389C17 3.80284 13.1944 0 8.5 0C3.80558 0 0 3.80284 0 8.49389C0 10.8394 0.951396 12.9629 2.48959 14.5L3.69168 13.2988C2.46112 12.069 1.7 10.3703 1.7 8.49389C1.7 4.74105 4.74446 1.69878 8.5 1.69878C12.2556 1.69878 15.3 4.74105 15.3 8.49389ZM11.2991 4.49579L7.47405 8.31806L8.67612 9.51927L12.5011 5.697L11.2991 4.49579Z"
        fill={fill}
      />
    </svg>
  );
};
