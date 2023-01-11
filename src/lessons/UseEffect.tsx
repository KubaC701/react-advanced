import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  userId: number;
  body: string;
}

const UseEffect = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    let isCancelled = false;
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (!isCancelled) {
        setPosts(data);
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default UseEffect;
