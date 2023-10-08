import React from "react";
import "../Css/Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-main">
        <h1 className="home-title">EvenTick</h1>
        <p className="home-text">Experience the Magic</p>
      </div>

      <div className="home-content">
        <h1>Latest Awesome Events</h1>
        <p>Explore and Enjoy Memorable Moments</p>
      </div>

      <div className="home-section">
        <div className="home-right-section">
          <h2>Summer Music Event.</h2>
          <p>
            Get ready for an unforgettable night filled with the enchanting
            melodies and electrifying performances of some of the world's top
            artists. Join us for Live Music Night, where you'll be transported
            to a world of musical magic. Whether you're a fan of rock, pop,
            jazz, or classical music, this event has something for everyone.
            Don't miss the chance to witness live music like never before!
          </p>
        </div>
        <img
          src="https://i.pinimg.com/564x/38/31/95/3831953519eb6180491ad257f41a9ad1.jpg"
          alt="music"
        />
      </div>

      <div className="home-section-unhidden">
        <img
          src="https://i.pinimg.com/236x/8c/7b/5d/8c7b5d17c27b74ae63fd794afd2e328f.jpg"
          alt="business"
        />
        <div className="home-left-section">
          <h2>Business Symposium </h2>
          <p>
            Welcome to the most anticipated business event of the year! The
            Business Symposium is your opportunity to connect with industry
            leaders, gain valuable insights, and explore the latest trends in
            entrepreneurship and innovation. Join renowned keynote speakers,
            attend interactive workshops, and network with like-minded
            professionals from around the world. Whether you're an aspiring
            entrepreneur or a seasoned business executive, this symposium is
            your gateway to success in the ever-evolving world of business.
          </p>
        </div>
      </div>

      <div className="home-section-hidden">
        <div className="home-right-section">
          <h2>Art Gallery</h2>
          <p>
            Immerse yourself in a world of creativity and expression at the
            "Colors of Expression" Art Exhibition. Explore breathtaking artworks
            from renowned and emerging artists, each piece a testament to the
            power of artistic expression. From paintings to sculptures, this
            exhibition showcases a diverse range of artistic styles and
            perspectives. Join us for an inspiring journey through the world of
            art and creativity!
          </p>
        </div>
        <img
          src="https://i.pinimg.com/236x/ed/62/b0/ed62b05912738100bb3d69bfdeb45369.jpg"
          alt="art gallery"
        />
      </div>

      <div className="home-section">
        <div className="home-right-section">
          <h2>Sports Expo</h2>
          <p>
            Calling all sports enthusiasts! The Sports Expo is the ultimate
            destination for sports lovers. Explore the latest sports equipment,
            watch thrilling competitions, and meet your sports heroes. Whether
            you're into basketball, soccer, or extreme sports, this expo has it
            all. Join us for an action-packed weekend celebrating the world of
            sports!
          </p>
        </div>
        <img
          src="https://i.pinimg.com/236x/31/64/79/316479e1987690e87563d9fb50591344.jpg"
          alt="sports"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
