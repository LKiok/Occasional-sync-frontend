import React from "react";
import "../Css/AboutPage.css"; 
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AboutPage() {
  const eventsContent = [
    {
      src: "https://images.unsplash.com/photo-1520891178068-b4fce513b3d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Community Carnival",
      description:
        "Discover exciting events that bring people together to explore new experiences and foster meaningful connections.",
    },
    {
      src: "https://images.unsplash.com/photo-1566954979172-eaba308acdf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
      title: "Art Exhibition Opening ",
      description:
        "Join our diverse community of event enthusiasts and engage in thought-provoking discussions and activities.",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1679547202671-f9dbbf466db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      title: "Global Business Fair",
      description:
        "Unite with event-goers worldwide and discover a wide range of events that cater to your interests.",
    },
  ];

  const testimonials = [
    {
      src: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      testimonial:
        "I had a fantastic experience with this event hub. The events are engaging, and I've met wonderful people who share my love for experiences.",
    },
    {
      src: "https://tinyurl.com/ystxfs5z",
      testimonial:
        "Joining this event hub was the best decision I made. The diverse selection of events and the sense of community are amazing!",
    },
    {
      src: "https://tinyurl.com/yw8ona2o",
      testimonial:
        "This event hub offers a unique opportunity to explore various experiences and engage in insightful discussions. I've grown as an event-goer and made great friends.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="title">Why Choose Us?</h2>
        <p className="description">
          With Over a Decade of Expertise, an Array of Event Offerings,
          Unbeatable Value, and Tailored Experiences
        </p>
        <div className="content-container">
          {eventsContent.map((item, index) => (
            <div key={index} className="content">
              <img
                src={item.src}
                alt="Event"
                key={item.index}
                loading="lazy"
                width={350}
              />
              <p className="content-description">{item.description}</p>
              <h2 className="title">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <h2 className="title">Testimonials</h2>
        <div className="content-container testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p className="testimonial-text">{testimonial.testimonial}</p>
              <img
                src={testimonial.src}
                alt="User"
                width={80}
                className="testimonial-image"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
