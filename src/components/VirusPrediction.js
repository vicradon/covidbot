import React from "react";
import PropTypes from "prop-types";

const VirusPrediction = ({ steps }) => {
  const [state, setState] = React.useState({
    gender: "",
    age: ""
  });

  React.useEffect(() => {
    const { gender, age } = steps;

    setState({ gender, age });
  }, [steps]);

  const { gender, age } = state;

  const prediction = (g, a) => {
    if (g === "male" && a > 35) {
      return "You are more likely to get infected than most other people";
    } else if (g === "male" && a < 35) {
      return "You are less likely to get infected than older men, but more likely to get infected than your female age mates";
    } else if (g === "female" && a < 35) {
      return "You are less likely to get infected than older men and women";
    } else {
      return "You are more likely to get infected than younger women but less likely to get infected than your male age mates";
    }
  };

  return (
    <div style={{ width: "100%" }}>{prediction(gender.value, +age.value)}</div>
  );
};
VirusPrediction.propTypes = {
  steps: PropTypes.object
};

VirusPrediction.defaultProps = {
  steps: undefined
};

export default VirusPrediction;
