import Image from "next/image";

import styles from "./Hero.module.scss";

const TAGLINE = "A man can't have enough basement.swag";

const Hero: React.FC = () => (
    <header className="mt-10" role="banner">
        <div className="container">
            <Image
                alt="Basement"
                height={365}
                src={`${process.env.NEXT_PUBLIC_HOST}/hero.svg`}
                width={1376}
            />
        </div>

        <div className="py-3 mt-16 text-xl border-t border-b border-solid md:text-4xl">
            <div className={styles["infinite-texts"]}>
                <span className={styles["infinite-text-1"]}>{`${TAGLINE} - `.repeat(2)}</span>
                <span className={styles["infinite-text-2"]}>{` ${TAGLINE} - `.repeat(2)}</span>
            </div>
        </div>

        <div className="container">
            <div className="relative mx-8">
                <div className="absolute right-0 z-20 w-3/12 bottom-9 animate-spin-slow md:w-auto">
                    <Image
                        alt=""
                        height={147}
                        src={`${process.env.NEXT_PUBLIC_HOST}/asterisk-1.svg`}
                        width={147}
                    />
                </div>

                <div className="absolute left-0 z-20 w-3/12 -top-2 animate-spin-slow md:w-auto">
                    <Image
                        alt=""
                        height={168}
                        src={`${process.env.NEXT_PUBLIC_HOST}/asterisk-2.svg`}
                        width={160}
                    />
                </div>
            </div>
        </div>
    </header>
);

export default Hero;
