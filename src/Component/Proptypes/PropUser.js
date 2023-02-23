import PropTypes from "prop-types";

function PropUser(prop) {
  return (
    <div>
      <h2>{prop.title}</h2>
      <h2>{prop.age}</h2>
    </div>
  );
}

PropUser.propTypes = {
  title: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default PropUser;
