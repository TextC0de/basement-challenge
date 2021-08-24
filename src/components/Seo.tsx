import Head from "next/head";
import {useRouter} from "next/router";

export type SeoProps = {
    title?: string;
    description?: string;
    image?: string;
    indexable?: boolean;
};

const Seo: React.FC<SeoProps> = ({
    title = "Basement Supply",
    description = "Coding challenge for basement.studio.",
    image = `${process.env.NEXT_PUBLIC_HOST}/og.png`,
    indexable,
}) => {
    const router = useRouter();
    const url = `${process.env.NEXT_PUBLIC_HOST}${router.pathname}`;

    return (
        <Head>
            <title>{title}</title>
            <meta content={title} name="title" />
            {description && <meta content={description} name="description" />}

            {!indexable && <meta content="noindex, nofollow" name="robots" />}

            {url && <meta content={url} property="og:url" />}

            {title && <meta content={title} property="og:title" />}
            {description && <meta content={description} property="og:description" />}
            {image && <meta content={image} name="image" />}

            {/* facebook | linkedin */}
            {image && <meta content={image} property="og:image" />}

            {/* twitter */}
            <meta content="summary_large_image" name="twitter:card" />
            {title && <meta content={title} name="twitter:title" />}
            {description && <meta content={description} name="twitter:description" />}
            {image && <meta content={image} name="twitter:image" />}
        </Head>
    );
};

export default Seo;
