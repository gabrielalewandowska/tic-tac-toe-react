import React from "react";

class Square extends React.Component {



render() {

  const turn = (props) => {
    return (this.props.player)
  }
    console.log(turn)
    return (
      <button className="square" >
        {turn}
      </button>
    );
  }
}



export default Square;
