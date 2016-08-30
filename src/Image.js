import React from 'react'

class Image extends React.Component {
  render() {
    console.log(this.props)
    return (
      <td>
        <img src={this.props.url} onClick={this.onClickImage.bind(this)}/>
      </td>
    )
  }
}

// https://img-fanburst.global.ssl.fastly.net/vnOXLBhRlTzW2HYKu9yzEAuvmM8=/400x400/https://fanburst-content.s3.amazonaws.com/avatar/c9963361-e6ce-47f5-aef8-fe78c1782e8f.png

export default Image
