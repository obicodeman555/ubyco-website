import Image from "next/image";

export const TradeWithConfidence = () => {
  return (
    <section className="twc__mainBlock">
      <article className="container">
        <div className="twc__mainBlock__intro section-intro">
          <h2 className="heading-2 stack-vertical">
            <span>Trade Crypto and Gift Cards </span>
            <span>with Confidence</span>
          </h2>
          <p>
            Whether you are selling crypto, exchanging gift cards, or handling
            business-volume trades, Ubycohub gives you a direct human trading
            desk built for speed, trust, and smooth payout.
          </p>
        </div>
        <div className="twc__contentBlock">
          <div>
            <Image
              src="/svgs/ubycohub-crypto-asset-group.svg"
              alt=""
              width={220}
              height={50}
            />
            <div>
              <div>
                <h3 className="heading-3">Sell Crypto</h3>
                <p className="text-muted">
                  Convert USDT, Bitcoin, Ethereum, Solana, USDC, BNB and other
                  supported assets to naira through our trusted chat-based
                  trading desk.
                </p>
              </div>
              <button className="btn-primary">Sell Crypto Now</button>
            </div>
          </div>
          <div>
            <Image
              src="/svgs/ubycohub-gift-cards-group.svg"
              alt=""
              width={236}
              height={52}
            />
            <div>
              <div>
                <h3 className="heading-3">Sell Gift Cards</h3>
                <p className="text-muted">
                  Exchange popular gift cards for naira with clear verification,
                  transparent communication, and fast payout after approval.
                </p>
              </div>
              <button className="btn-primary">Sell Gift Card</button>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/svgs/ubycohub-platform-settlement-shot.svg"
                alt=""
                width={337}
                height={225}
              />
            </div>
            <div>
              <h3 className="heading-3">Business Trading</h3>
              <p className="text-muted">
                For businesses, vendors, and high-volume traders who need
                reliable crypto liquidation, dedicated support, and fast
                settlement.
              </p>
              <button className="btn-primary">Trade as a Business</button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
