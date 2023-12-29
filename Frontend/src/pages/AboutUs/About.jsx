import React from "react";
import aboutStyle from "./About.module.css";

const images = {
  img1: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyfGVufDB8fDB8fHww",
  img3: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  img2: "https://images.unsplash.com/photo-1563387852576-964bc31b73af?q=80&w=2107&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  img4: "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  img5: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  img6: "https://images.unsplash.com/photo-1539035104074-dee66086b5e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
};
const About = () => {
  return (
    <div className={aboutStyle.page_container}>
      <div className={aboutStyle.maintext}>
        <h2>
          "Empowering individuals to share their stories and passions through a
          platform that celebrates diverse voices and fosters a vibrant
          community of bloggers."
        </h2>
      </div>

      <div className={aboutStyle.gallery}>
        <div
          className={`${aboutStyle.gallery_item} ${aboutStyle.gallery_item_1}`}
        >
          <img src={images.img1} alt="" />
        </div>

        <div
          className={`${aboutStyle.gallery_item} ${aboutStyle.gallery_item_2}`}
        >
          <img src={images.img2} alt="" />
        </div>

        <div
          className={`${aboutStyle.gallery_item} ${aboutStyle.gallery_item_3}`}
        >
          <img src={images.img3} alt="" />
        </div>

        <div
          className={`${aboutStyle.gallery_item} ${aboutStyle.gallery_item_4}`}
        >
          <img src={images.img4} alt="" />
        </div>

        <div
          className={`${aboutStyle.gallery_item} ${aboutStyle.gallery_item_5}`}
        >
          <img src={images.img5} alt="" />
        </div>

        <div
          className={`${aboutStyle.gallery_item} ${aboutStyle.gallery_item_6}`}
        >
          <img src={images.img6} alt="" />
        </div>
      </div>

      <div className={aboutStyle.gallery}>
        <div>
          <h2>About Us</h2>
          Welcome to Blogify, your go-to destination for insightful and engaging
          content. Our passion for sharing knowledge and stories led to the
          creation of this platform, where we strive to connect with readers who
          share our enthusiasm for diverse topics. lorem
        </div>
        <div>
          <h2>Our Mission</h2>
          At Blogify, our mission is to inspire, inform, and entertain. We
          believe in the power of words to spark conversations, ignite
          imaginations, and create meaningful connections. Whether you're a
          seasoned reader or a newcomer to the world of blogging, we aim to
          provide a space where everyone can find something valuable and
          enjoyable.
        </div>
        <div>
          <h2>What Sets Us Apart</h2>
          Diverse Perspectives | Quality Content | Engaging Community
        </div>
        <div>
          <h2>Join Us on this Journey</h2>
          Thank you for being a part of the [Your Blog Name] community. We
          invite you to explore our articles, join the conversations, and embark
          on a journey of discovery with us. Together, let's make every reading
          experience memorable.
        </div>
        <div>
          <h1>Happy reading! The Blogify Team</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
