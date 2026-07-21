import Image from "next/image";

export const Logo = () => {
  return (
    <div className="ubycohub__logo">
      <Image
        src="/images/ubycohub-logo.png"
        alt="This is Ubycohub business logo"
        width={130}
        height={32}
      />
    </div>
  );
};

export const LogoV2 = () => {
  return (
    <div className="ubycohub__logo ubycohub__logo__icon">
      <Image
        src="/svgs/ubycohub-logo-2.svg"
        alt="This is Ubycohub business logo"
        width={57}
        height={38}
      />
    </div>
  );
};
