import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({ children }) {
    return (
      <div lang="en">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    );
  }