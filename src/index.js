import React from "react";
import reactDom from "react-dom";
import DefineSeason from "./defineSeason";
import Loader from "./loader";

if(module.hot) {
    module.hot.accept();
}



class App extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     lat: null,
        //     long: null,
        //     errMessage: null
        // }
    }
    state = {
        lat: null,
        long: null,
        errMessage: null
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude, long: position.coords.longitude}),
            err => this.setState({errMessage: err.message})
        )
    }
    componentDidUpdate() {
        console.log("Component updated");
    }

    renderContent() {
        if(!this.state.errMessage && this.state.lat) {
            return (
                <DefineSeason lat={this.state.lat}/>
                )
        }
        if(!this.state.lat && this.state.errMessage) {
            return <div>Error: {this.state.errMessage}</div>
        }

        return <Loader message="Please allow location access"/>
    }

    render() {
      return (
          <div>
              {this.renderContent()}
          </div>
      )
    } 
}

reactDom.render(<App/>, document.querySelector("#root"));