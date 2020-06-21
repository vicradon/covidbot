import React from "react";
import PropTypes from "prop-types";

const Review = ({steps}) => {
  const [state, setState] = React.useState({
    name: "",
    gender: "",
    age: ""
  });

  React.useEffect(() => {
    const { name, gender, age } = steps;

    setState({ name, gender, age });
  }, [steps]);

  const { name, gender, age } = state;
  return (
    <div style={{ width: "100%" }}>
      <h3>Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{name.value}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{gender.value}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{age.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
Review.propTypes = {
  steps: PropTypes.object
};

Review.defaultProps = {
  steps: undefined
};

export default Review;
