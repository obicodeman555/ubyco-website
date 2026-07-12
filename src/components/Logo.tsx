import Image from "next/image";
import logoSrc from "@/assets/images/ubycohub-logo-1.png";

export const Logo = () => {
  return (
    <Image src={logoSrc} alt="This is Ubycohub business logo" width="130" />
  );
};
