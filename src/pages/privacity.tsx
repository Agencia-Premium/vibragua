import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import { PrivacityPage } from "../Templates/Privacity";

export default function Privacity(): JSX.Element {
  return (
    <>
      <NavBar
        linkHome="/"
        linkAbout="/"
        linkProduct="/"
        linkContact="/"
        linkBlog="/"
      />
      <PrivacityPage />;
      <Footer />
    </>
  );
}
