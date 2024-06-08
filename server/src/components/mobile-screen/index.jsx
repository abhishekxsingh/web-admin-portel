import React from "react";
import Logo from '../../assets/mobile-ub.jpeg';
import './style.scss'; // Import CSS file for styling

const NewsContent = ({ image, content }) => (
  <div>
    <img
      src={Logo}
      alt="News"
      className="background-image"
    />
    <img src={image} className="news-image" />
    <p className="news-content">{content}</p>
  </div>
);

const Mobile = (props) => {
    const {
        image="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg", 
        content= `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.`} 
    = props;

  return <NewsContent image={image} content={content} />;
};

export default Mobile;
