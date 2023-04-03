import React from "react";
import styles from "./Blogs.module.css";
import { format } from "date-fns";
export const Blogs = ({
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
        <img src={"http://localhost:4000/" + cover} alt="yogi and modi" />
      </div>
      <div className={styles.text}>
        <h2>{title}</h2>
        {/* description */}
        <p className={styles.info}>
          {/* <a href="">{author.username}</a> */}
          <time>{format(new Date(createdAt), "MMM d, yyy HH:mm")}</time>
        </p>
        <p className={styles.summary}>{summary}</p>
      </div>
    </div>
  );
};
