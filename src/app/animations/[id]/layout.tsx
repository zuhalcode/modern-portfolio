import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animations",
  description:
    "A personal portfolio website introducing me as Website Developer",
};

interface LayoutProps {
  children: React.ReactNode;
  params: { id: string };
}

export default function RootLayout({ children, params: { id } }: LayoutProps) {
  return children;
}
