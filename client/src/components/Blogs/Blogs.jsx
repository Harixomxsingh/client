import React from "react";
import styles from "./Blogs.module.css";
export const Blogs = () => {
  return (
    <div className={styles.blogs}>
      {/* thumbail */}
      <div className={styles.img}>
        <img
          src="https://static.toiimg.com/thumb/msid-98984624,imgsize-1026115,width-400,resizemode-4/98984624.jpg"
          alt="yogi and modi"
        />
      </div>
      {/* heading */}
      <div className={styles.text}>
        <h2>Expectations soar as Yogi Adityanath govt hits a six</h2>
        {/* description */}
        <p className={styles.info}>
            <a href="">James Joyce</a>
            <time>2023-01-06 16:45</time>
        </p>
        <p className={styles.summary}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          voluptatum labore ducimus alias dolorum hic doloribus nesciunt quo
          illo eaque! Sit explicabo molestias exercitationem nisi odit esse
          animi autem? Debitis.
        </p>
      </div>
    </div>
  );
};
