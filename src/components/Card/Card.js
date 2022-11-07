import React from "react";
import { CardStyles } from "./Card.styles";
import PropTypes from "prop-types";

const Card = ({ content, width, justify }) => {
  return (
    <CardStyles style={{ width: `${width}`, justifyContent: `${justify}` }}>
      {content}
    </CardStyles>
  );
};

Card.propTypes = {
  content: PropTypes.node,
  width: PropTypes.string,
  justify: PropTypes.string,
};

export default Card;
