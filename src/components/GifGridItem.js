import React from "react";
import PropTypes from "prop-types";

function GifGridItem({ title, url }) {
  return (
    <div className="card animate__animated animate__bounceInUp">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem;
