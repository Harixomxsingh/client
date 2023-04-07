import React from "react";
import styles from "./Blogs.module.css";
import { format } from "date-fns";
import { Link } from "react-router-dom";
export const Blogs = ({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) => {
  return (
    <div className={styles.blogs}>
      {/* thumbail */}
      <div className={styles.img}>
        <Link to={`/post/${_id}`}>
          <img src={"http://localhost:4000/" + cover} alt="yogi and modi" />
        </Link>
      </div>
      <div className={styles.text}>
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        {/* description */}
        <p className={styles.info}>
          <a href="">{author.username}</a>
          <time>{format(new Date(createdAt), "MMM d, yyy HH:mm")}</time>
        </p>
        <p className={styles.summary}>{summary}</p>
      </div>
    </div>
  );
};
