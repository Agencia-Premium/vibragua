import { GetStaticPaths, GetStaticProps } from "next";

import api from "../../services/api";

import NavBar from "../../components/NavBar";

import { Container, Title } from "../../styles/blog";
import { Footer } from "../../components/Footer";

interface IPosts {
  news: {
    id: number;
    titulo: string;
    descricao: string;
    data: Date;
    conteudo: string;
    foto: {
      url: string;
    }[];
    published_at: string;
  };
}

export default function BlogPosts({ news }: IPosts) {
  return (
    <>
      <NavBar
        linkHome="/"
        linkAbout="/"
        linkProduct="/"
        linkContact="/"
        linkBlog="/blog"
      />
      <Title>{news?.titulo}</Title>
      <Container>
        <div className="content">
          <div className="left">
            <img src={news?.foto[0].url} alt={news?.titulo} />
          </div>

          <div className="right">
            <h6>{news?.descricao}</h6>
            <p>{news?.conteudo}</p>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { pid }: any = ctx.params;
  const { data: news } = await api.get(`/posts/${pid}`);

  return {
    props: { news },
  };
};
