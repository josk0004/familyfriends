// import { Geist, Geist_Mono } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";
import PhoneStuff from "./components/PhoneStuff";
import { IoIosNotificationsOutline } from "react-icons/io";
import FooterNav from "./components/FooterNav";
import Link from "next/link";

const manropeFont = Manrope({
  variable: "--font-base-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "FamilyFriends",
  description: "A platform to connect with a family's best friends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-foreground overflow-hidden p-8 antialiased ${manropeFont.variable}`}
      >
        <div className="font-manrope relative mx-auto flex h-[812px] max-h-screen w-[375px] flex-col overflow-x-hidden rounded-4xl bg-white">
          <PhoneStuff />

          {/* Scrollable content area: keeps footer fixed at container bottom */}
          <div className="scrollbarHide flex-1 overflow-y-auto">
            <div className="flex items-center justify-between px-6 pt-4 pb-6">
              <Link href="/">
                <h1 className="text-lg font-bold">FamilyFriends</h1>
              </Link>
              <IoIosNotificationsOutline size={24} />
            </div>
            {children}
          </div>

          <FooterNav />
        </div>
      </body>
    </html>
  );
}
