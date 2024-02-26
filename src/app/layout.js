
import "./globals.css";
import Footer from "@/components/Footer/Footer";



export const metadata = {
  title: "Google Clone",
  description: "A Google Clone Project By Vaisakh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative min-h-screen'>
        {children}
        <Footer />
      </body>
    </html>
  );
}
