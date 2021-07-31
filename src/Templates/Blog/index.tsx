import { Container, ContainerCard, Title } from "./styles";

import { Card } from "../../components/Card";
import { useEffect, useState } from "react";
import api from "../../services/api";

export function BlogPage() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getLink() {
      await api
        .get("/posts")
        .then((result) => {
          setPost(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getLink();
  }, []);

  return (
    <>
      <Title>BLOG - VIBRÁGUA</Title>

      <Container>
        <ContainerCard>
          {post.map((post, index) => {
            return (
              <Card
                key={index}
                image="./imgTemporaria.png"
                title="long established"
                shortDescription="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...."
                createdAt="May 20th 2020"
              />
            );
          })}
        </ContainerCard>
      </Container>
    </>
  );
}
