import React, { useState, useEffect } from "react";
import "./Slider.css";
import {AiOutlineArrowLeft} from 'react-icons/Ai';
const data = [
  {
    id: 1,
    image: "/assets/profile6.jpg",
    name: "Haryy Stamper",
    quote:
      "Tasty Bites has impressed me with its wide selection of restaurants and efficient delivery service. The website has a clean and appealing interface, making it a pleasure to use. The food is consistently delicious and delivered within the estimated time.",
  },
  {
    id: 2,
    image: "/assets/profile2.jpg",
    name: "James Gun",
    quote:
      "Tasty Bites has become my preferred food delivery website due to its outstanding customer service and attention to detail. The website is easy to navigate, and they offer a great variety of restaurants to choose from.",
  },
  {
    id: 3,
    image: "/assets/profile3.jpg",
    name: "Michael Mosely",
    quote:
      "Tasty Bites is a lifesaver when I'm in need of a quick and convenient meal. The website is intuitive and easy to navigate, making it effortless to find restaurants in my area.",
  },
  {
    id: 4,
    image: "/assets/profile8.jpg",
    name: "James Van",
    quote:
      "Tasty Bites is user-friendly, and I love how they highlight popular restaurants and trending dishes. The ordering process is seamless, and the food is consistently delicious. The delivery drivers are efficient and professional, ensuring that my meals arrive on time.",
  },
];

const Slider = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section" id='review'>
      <div className="title">
        <h2><b>Reviews</b></h2>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <AiOutlineArrowLeft className="fas fa-arrow-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  );
};

export default Slider;
