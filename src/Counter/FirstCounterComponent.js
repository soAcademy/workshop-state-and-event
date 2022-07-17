import React from "react"

class FirstCounterComponent extends React.Component {
  constructor() {
    super()
    // To do: initial count state here
  }

  handleClick = (e) => {
    // To do: update count state here
  }

  render() {
    // To do: show counting here
    return (
      <div>
        <h1>FirstCounter Count:</h1>
        <button onClick={this.handleClick}>Plus 1</button>
      </div>
    )
  }
}

export default FirstCounterComponent
