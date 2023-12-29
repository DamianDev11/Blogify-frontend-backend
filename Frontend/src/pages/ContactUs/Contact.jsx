import React from "react";
import { useNavigate } from "react-router-dom";
import contactStyle from "./Contact.module.css";

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/");
  };
  return (
    <div className={contactStyle.page_container}>
      <div className={contactStyle.maintext}>
        
      </div>

      <h3 className={contactStyle.title}>Contact Us</h3>

      <div className={contactStyle.container}>
        <form onSubmit={handleSubmit} className={contactStyle.form}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="John..."
            className={contactStyle.inputTextField}
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Doe..."
            className={contactStyle.inputTextField}
          />

          <label htmlFor="country">Country</label>
          <select name="country" id="country" className={contactStyle.select}>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="China">China</option>
            <option value="Australia">Australia</option>
          </select>

          <label htmlFor="message">Any query or suggestions?</label>
          <textarea
            name="message"
            id="message"
            className={contactStyle.textarea}
          ></textarea>

          <input
            type="submit"
            value="Submit"
            className={contactStyle.inputSubmit}
          />
        </form>

        <div className={contactStyle.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2980936219087!2d77.56035777417009!3d12.888543716695635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151f1d485609%3A0x128233fc8d0b7aa4!2shtmlForum%20Mall!5e0!3m2!1sen!2sin!4v1687190126341!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className={contactStyle.container}>
        <div className={contactStyle.maintext}>
          <h2>Get in Touch</h2>
          We love hearing from our readers! Whether you have feedback,
          questions, or simply want to connect, we're here for you. Feel free to
          reach out using the following contact options:
        </div>
        <div className={contactStyle.maintext}>
          <h2>General Inquiries</h2>
          For general inquiries or if you're not sure whom to contact, please
          email us at{" "}
          <a href="damianprakash07@gmail.com">damianprakash07@gmail.com</a>.
          We'll do our best to respond to your message promptly.
        </div>
      </div>
      <div className={contactStyle.container}>
        <div className={contactStyle.maintext}>
          <h2>Editorial Team</h2>
          If you have specific questions about our content, would like to
          contribute, or have suggestions for topics you'd like to see covered,
          please contact our editorial team at editorial@yourblogname.com.
        </div>
        <div className={contactStyle.maintext}>
          <h2>Advertising and Partnerships</h2>
          For advertising opportunities, brand collaborations, or partnership
          inquiries, please email our partnerships team at{" "}
          <a href="damianprakash07@gmail.com">damianprakash07@gmail.com</a>.
        </div>
      </div>
    </div>
  );
};

export default Contact;
