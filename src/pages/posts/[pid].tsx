import { useRouter } from "next/dist/client/router";
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

export default function BlogPosts() {
  const router = useRouter();
  const { pid } = router.query;

  const [post, setPost] = useState<PostsProps[]>([]);

  useEffect(() => {
    async function getPosts() {
      await api
        .get(`/posts/${pid}`)
        .then((result) => {
          setPost(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getPosts();
  }, [pid]);

  console.log(post);

  return (
    <>
      {/* {post.map((post) => {
        return (
          <>
            <div className="header">
              <img src={post[0].image} alt={post.title} />
            </div>
          </>
        );
      })} */}
    </>
  );
}
