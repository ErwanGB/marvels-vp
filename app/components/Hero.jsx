import React from "react"
import md5 from "crypto-js/md5"
import PropTypes from 'prop-types'


const API_PRIVATE = "b0223681fced28de0fe97e6b9cd091dd36a5b71d"
const API_PUBLIC = "298bab46381a6daaaee19aa5c8cafea5"
const BASE_URL = "http://gateway.marvel.com/v1/public/characters"

class Hero extends React.Component {
    constructor(props) {
        super(props);
    }  

    handleGetHero(e){
        this.props.getHero(this.props.heroid)
    }

    render() {
        return (
                <div className="HeroMini" onClick={ this.handleGetHero.bind(this) }>
                    <h2>{this.props.name}</h2>
                    <img src={this.props.thumburl}/>
                </div>
        );
    }
}

Hero.propTypes = {
    heroid: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumburl: PropTypes.string.isRequired,
};

export default Hero;