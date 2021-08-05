import { Container, ContainerCard, Title } from "./styles";

import { Card } from "../../components/Card";
import { useEffect, useState } from "react";
import api from "../../services/api";

interface PostsProps {
  id: number;
  titulo: string;
  descricao: string;
  data: Date;
  conteudo: string;
  foto: {
    url: string;
  }[];
  published_at: string;
}

export function BlogPage() {
  const [post, setPost] = useState<PostsProps[]>([]);

  useEffect(() => {
    async function getPosts() {
      await api
        .get("/posts")
        .then((result) => {
          setPost(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getPosts();
  }, []);

  return (
    <>
      <Title>BLOG - VIBRÁGUA</Title>
      <Container>
        <ContainerCard>
          {post.map((post) => {
            return (
              <Card
                id={post.id}
                key={post.id}
                image={post.foto[0].url}
                title={post.titulo}
                shortDescription={post.descricao}
                createdAt={new Intl.DateTimeFormat("pt-BR").format(
                  new Date(post.published_at)
                )}
              />
            );
          })}
        </ContainerCard>
      </Container>
    </>
  );
}
