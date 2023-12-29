import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import allPostStyle from "./AllPosts.module.css";
import Posts from "../../components/Posts/Posts";
import { useDispatch } from "react-redux";
import { setAllPosts } from "../../features/authSlice";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = `http://localhost:3000/api/getAllBlogs${search}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setPosts(data);

        dispatch(setAllPosts(data));
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchPosts();
  }, [search]);

  return (
    <div className={allPostStyle.home}>
      <Posts posts={posts} />
    </div>
  );
};

export default Home;
