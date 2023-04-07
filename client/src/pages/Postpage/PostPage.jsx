import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./PostPage.module.css";
import { format, formatISO9075 } from "date-fns";

export const PostPage = () => {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);
  if (!postInfo) return "";
  return (
    <div className="post-page">
      <div className={styles.image}>
        <img
          src={`http://localhost:4000/${postInfo.cover}`}
          className={styles.img}
          alt=""
        />
      </div>
      <div>
        by <span>{postInfo.author.username} : </span>
        <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      </div>
      <h1>{postInfo.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  );
};
