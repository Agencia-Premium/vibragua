import { Container, CardBlog } from "./styles";
import Link from "next/link";

interface CardProps {
  id: number;
  image: string;
  title: string;
  shortDescription: string;
  createdAt: string;
}

export function Card(props: CardProps) {
  return (
    <Container>
      <CardBlog>
        <div className="header">
          <img src={props.image} alt={props.title} />
        </div>

        <div className="content">
          <h2>{props.title}</h2>

          <p>{props.shortDescription}</p>
        </div>

        <div className="footer">
          <span>{props.createdAt}</span>
          <Link href={`/posts/${props.id}`}>
            <a>Leia mais</a>
          </Link>
        </div>
      </CardBlog>
    </Container>
  );
}
