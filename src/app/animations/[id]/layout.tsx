import { animationData } from "@/data/animation-data";
import { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
}

type Animation = {
  title: string;
  label: string;
  description: string;
  url: string;
  imgUrl: string;
  imgAlt: string;
  keywords: string[];
  component: React.ReactNode;
  metadata: Metadata;
};

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const foundAnimation = animationData.find(({ label }) => label === id);

  if (!foundAnimation) throw new Error(`Animation with id "${id}" not found.`);

  const {
    title,
    description,
    url,
    imgUrl,
    imgAlt,
    keywords,
    label,
  }: Animation = foundAnimation;

  const metadataUrl: string = `${process.env.NEXT_PUBLIC_BASE_URL}/animations/${label}`;

  return {
    title,
    description,
    metadataBase: new URL(url),
    keywords,
    openGraph: {
      title,
      description,
      url: metadataUrl,
      siteName: "Floating Animation created by Zuhal",
      images: [{ url: imgUrl, width: 1200, height: 630, alt: imgAlt }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "Zuhal",
      images: [
        {
          url: imgUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    robots: { index: true, follow: false },
    category: "technology",
  };
}

export default function RootLayout({ children }: LayoutProps) {
  return children;
}
