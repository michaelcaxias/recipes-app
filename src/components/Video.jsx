import PropTypes from 'prop-types';
import React from 'react';

export default function Video({ comida }) {
  const embedVideo = () => {
    if (comida) {
      const code = comida.strYoutube.split('v=');
      return `http://www.youtube.com/embed/${code[1]}`;
    }
  };

  return (
    <iframe
      data-testid="video"
      width="340"
      height="180"
      src={ embedVideo() }
      title="Youtube Video"
      frameBorder="0"
    />
  );
}

Video.propTypes = {
  comida: PropTypes.shape({
    strYoutube: PropTypes.shape({
      split: PropTypes.func,
    }),
  }).isRequired,
};
