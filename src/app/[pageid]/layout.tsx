import Header from "@/components/Header";
import Link from "next/link";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header>
        <p className="">
          <Link href={"/"} className="flex gap-1">
            <span className="arrow">←</span>홈으로
          </Link>
        </p>
      </Header>
      <div className="p-10 pt-8">{children}</div>
    </>
  );
}
