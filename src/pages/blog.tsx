import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import { BlogPage } from "../Templates/Blog";

export default function Blog(): JSX.Element {
  return (
    <>
      <NavBar
        linkHome="/"
        linkAbout="/"
        linkProduct="/"
        linkContact="/"
        linkBlog="/blog"
      />

      <BlogPage />

      <Footer />
    </>
  );
}
