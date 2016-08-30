import React from 'react'
import Image from './Image'

class Board extends React.Component {
  constructor() {
    super()

    this.state = {
      cards: [
        { url: "https://pbs.twimg.com/profile_images/651783155448418304/rQPL7ZFh.jpg" },
        { url: "http://ronjeffries.com/articles/016-04/roulette-4/base-image.png" },
        { url: "http://sjerjacobs.com/de/grafmonumenten/image?view=image&format=raw&type=img&id=1191" },
        { url: "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=40.720032,-73.988354&fov=90&heading=235&pitch=10" },
        { url: "https://www.slrlounge.com/wp-content/uploads/critique/353703/image-400x400.jpeg" },
        { url: "http://sjerjacobs.com/de/grafmonumenten/image?view=image&format=raw&type=img&id=1191" },
        { url: "http://www.cafeterrablog.com/wp-content/uploads/2016/07/grilled-guacamole-cover-image-400x400.jpg" },
        { url: "http://glutenvrij-inge.nl/wp-content/uploads/2016/06/image-5-e1467200114149.jpeg" },
        { url: "https://www.noao.edu/image_gallery/images/d6/m75a.jpg" },
        { url: "http://glutenvrij-inge.nl/wp-content/uploads/2016/06/image-5-e1467200114149.jpeg" },
        { url: "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=40.720032,-73.988354&fov=90&heading=235&pitch=10" },
        { url: "http://ronjeffries.com/articles/016-04/roulette-4/base-image.png" },
        { url: "https://pbs.twimg.com/profile_images/651783155448418304/rQPL7ZFh.jpg" },
        { url: "https://www.noao.edu/image_gallery/images/d6/m75a.jpg" },
        { url: "https://www.slrlounge.com/wp-content/uploads/critique/353703/image-400x400.jpeg" },
        { url: "http://www.cafeterrablog.com/wp-content/uploads/2016/07/grilled-guacamole-cover-image-400x400.jpg" },
      ]
    }
  }

  onClickImage(url) {
    console.log(this)
    const { cards } = this.state
    return {
      url: card
    }
  }

  shuffleCards() {
  var shuffle = require('shuffle-array'),
    cards = this.state.cards

    shuffle(cards)
  }

  renderImage(card, index) {
    return (
      <Image key={ index }
      url={ "https://img-fanburst.global.ssl.fastly.net/vnOXLBhRlTzW2HYKu9yzEAuvmM8=/400x400/https://fanburst-content.s3.amazonaws.com/avatar/c9963361-e6ce-47f5-aef8-fe78c1782e8f.png" }
      onClick={this.onClickImage.bind(this)}/>
    )
  }

  render() {
    return (
      <div>
        <h1>Memory</h1>
        <table>
          <tbody>
            <tr>
              { this.state.cards.slice(0,4).map(this.renderImage.bind(this))}
            </tr>
            <tr>
              { this.state.cards.slice(4,8).map(this.renderImage.bind(this))}
            </tr>
            <tr>
              { this.state.cards.slice(8,12).map(this.renderImage.bind(this))}
            </tr>
            <tr>
              { this.state.cards.slice(12,16).map(this.renderImage.bind(this))}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Board
