import MainHeader from "@/components/mainHeader/mainHeader";
import "./globals.css";

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
      </body>
    </html>
  );
}
