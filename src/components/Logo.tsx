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
