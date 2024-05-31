import MainHeader from "@/components/mainHeader";
import "./globals.css";
import { MainHeaderBackground } from "@/components/mainHeaderBackground";

export const metadata = {
  title: "Food Hub",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
