import React from 'react'

class Artist extends React.Component {
  constructor(props) {
    super(props)

    this.state = { items: props.items, disabled: true }
  }

  componentDidMount() {
    this.setState({ disabled: false })
  }

  handleClick() {
    this.setState({
      items: this.state.items.concat('Item ' + this.state.items.length),
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)} disabled={this.state.disabled}>
          Add
        </button>
        <ul>
          {this.state.items.map((item, i) => <li key={'item-' + i}>{item}</li>)}
        </ul>
      </div>
    )
  }
}

export default Artist
