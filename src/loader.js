import react from "react";

const Loader = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui indeterminate text loader">{props.message}</div>
    </div>
  );
};

//To fox default value for location
Loader.defaultProps = {
    message: "Loading...."
}

export default Loader;
