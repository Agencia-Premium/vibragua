/* eslint-disable react/no-children-prop */
import { GetStaticPaths, GetStaticProps } from "next";

import api from "../../services/api";
import NavBar from "../../components/NavBar";
import { Container, Title } from "../../styles/blog";
import { Footer } from "../../components/Footer";
import React from "react";
import ReactMarkdown from "react-markdown";

interface IPosts {
  news: {
    id: number;
    Titulo: string;
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
      <Container>
        <div className="content">
          <div className="left">
            <Title>{news?.Titulo}</Title>
            <p>
              Vibrágua,{" "}
              {new Date(news?.published_at).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
            <img src={news?.foto[0].url} alt={news?.Titulo} />
          </div>

          <div className="right">
            <h6>{news?.descricao}</h6>

            <p>
              <ReactMarkdown>{news?.conteudo}</ReactMarkdown>
            </p>
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
