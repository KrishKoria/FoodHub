import MainHeader from "@/components/mainHeader/mainHeader";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata = {
  title: "Food Hub",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
