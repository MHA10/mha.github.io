import Navbar from "./Navbar";
import Footer from "./Footer";

interface MyComponentProps {
  children: React.ReactNode;
}

const Layout = ({ children }: MyComponentProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
