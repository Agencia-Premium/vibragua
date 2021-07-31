import { Container, CardBlog } from "./styles";

interface CardProps {
  // id: number;
  image?: string;
  title?: string;
  shortDescription?: string;
  createdAt?: string;
  layoutId?: string;
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
          <a href="">Leia mais</a>
        </div>
      </CardBlog>
    </Container>
  );
}
