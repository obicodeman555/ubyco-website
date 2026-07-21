import Image from "next/image";
import { CheckMarkIcon, PointerCursorIcon } from "@/assets/svgs";

export const NairaPayoutConfirmedAvatar = () => {
  return (
    <div className="payout__illustration">
      <Image
        src={"/svgs/ubycohub-3d-naira-confirmation-payout-avatar.svg"}
        alt=""
        width={62}
        height={62}
      />
      <div>
        <CheckMarkIcon color="#FF3155" />
        <span>Payout confirmed</span>
      </div>

      <PointerCursorIcon />
    </div>
  );
};
