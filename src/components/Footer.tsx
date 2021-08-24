import Image from "next/image";

const Footer: React.FC = () => (
    <footer className="container mt-24">
        <Image
            alt=""
            height={486}
            src={`${process.env.NEXT_PUBLIC_HOST}/footer.svg`}
            width={1376}
        />
    </footer>
);

export default Footer;
