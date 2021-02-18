const Loader = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui indeterminate text loader">{props.message}</div>
    </div>
  );
};

//To fox default value for location
Loader.defaultProps = {
    message: "Loading...."
}

export default Loader;
