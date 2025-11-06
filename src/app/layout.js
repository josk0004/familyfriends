// import { Geist, Geist_Mono } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";
import PhoneStuff from "./components/PhoneStuff";
import { IoIosNotificationsOutline } from "react-icons/io";
import FooterNav from "./components/FooterNav";

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
          <div className="flex items-center justify-between px-6 pb-6">
            <h1 className="text-lg font-bold">FamilyFriends</h1>
            <IoIosNotificationsOutline size={24} />
          </div>

          {/* Scrollable content area: keeps footer fixed at container bottom */}
          <div className="flex-1 overflow-y-auto pb-24">{children}</div>

          <FooterNav />
        </div>
      </body>
    </html>
  );
}
