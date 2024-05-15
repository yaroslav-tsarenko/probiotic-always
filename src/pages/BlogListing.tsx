import { FunctionComponent } from "react";
import Content from "../components/Content";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";
import styles from "./BlogListing.module.css";
import FrameComponent5 from "../components/FrameComponent5";

const BlogListing: FunctionComponent = () => {
  return (
    <div className={styles.blogListing}>
      <Content />
      <div className={styles.container}>
        <img
          className={styles.containerChild}
          alt=""
          src="/group-1000005946.svg"
        />
      </div>
      <main className={styles.frameParent}>
          <FrameComponent5 />
        <FrameComponent2 blogListing="Blog Listing" />
        <FrameComponent />
        <GroupComponent />
      </main>
    </div>
  );
};

export default BlogListing;
