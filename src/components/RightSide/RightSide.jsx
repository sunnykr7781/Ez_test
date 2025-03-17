import React from "react";
import "./RightSide.css";

const RightSide = () => {
  const cardData = [
    { title: "Presentation Design", image: "/Assets/presentation.png", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet" },
    { title: "Audio - Visual Production", image: "/Assets/audio.png", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet" },
    { title: "Translation Services", image: "/Assets/translation.png", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet" },
    { title: "Graphic Design", image: "/Assets/graphic.png", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet" },
    { title: "Research & Analytics", image: "/Assets/research.png", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet" },
    { title: "Data Processing", image: "/Assets/data.png", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet" }
  ];

  return (
    <div className="right-side">
      <div className="cards-container">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <img src={card.image} alt={card.title} className="card-logo" />
              <h3 className="card-title">{card.title}</h3>
            </div>
            <p className="card-text">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSide;
