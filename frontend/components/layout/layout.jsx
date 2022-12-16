import MainNavigation from "../ui/MainNavigation";
import Footer from "../ui/Footer";


const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
