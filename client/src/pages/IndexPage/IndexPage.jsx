import React, { useEffect, useState } from "react";
import { Blogs } from "../../components/Blogs/Blogs";

export const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        // console.log(posts);
        setPosts(posts);
      });
    });
  }, []);
  console.log(posts);
  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => {
          return <Blogs {...post} />;
        })}
    </>
  );
};
