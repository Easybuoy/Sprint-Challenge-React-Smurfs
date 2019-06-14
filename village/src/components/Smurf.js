import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button
        onClick={() => {
          props.deleteSmurf(props.id);
        }}
      >
        Delete
      </button>
      <button>
        <Link to={`/smurf/${props.id}`}>Update</Link>
      </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;

Smurf.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  deleteSmurf: PropTypes.func.isRequired
};
