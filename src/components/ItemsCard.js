import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRightCircle } from "react-icons/ai";
import PropTypes from "prop-types";

const ItemsCard = ({ id, country, totallConfirmed }) => (
  <Link className="countries" to={`details/${id}`} key={id}>
    <div className="right-icon">
      <AiOutlineRightCircle />
    </div>
    <div className="country-data">
      <h2 className="ea-country">{country.Country}</h2>
      {totallConfirmed}
    </div>
  </Link>
);
ItemsCard.propTypes = {
  id: PropTypes.string.isRequired,
  country: PropTypes.shape({
    Country: PropTypes.string,
  }).isRequired,
  totallConfirmed: PropTypes.string.isRequired,
};
export default ItemsCard;
