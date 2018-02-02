import React from "react"
import PropTypes from 'prop-types'


class HeroDetails extends React.Component {
    constructor(props) {
        super(props);
    }  

    handleGetHeroesList(){
        this.props.getHeroesList()
    }

    render() {
        return (
                <div id="HeroDetails">
                        <div id="HeroPres">
                            <img src={this.props.hero.thumbnail.path + "." + this.props.hero.thumbnail.extension}/>
                            <h1>{ this.props.hero.name }</h1>
                            <p>
                                { this.props.hero.description}
                            </p>
                        </div>
                        <div className="HeroList">
                            <h2>Comics ({this.props.hero.comics.available})</h2>
                            <ul>
                                {this.props.hero.comics.items.map(item => {
                                return <li key={item.name}>{item.name}</li>
                                })
                                }
                            </ul>
                        </div>
                        <div className="HeroList">
                            <h2>Series ({this.props.hero.series.available})</h2>
                            <ul>
                                {this.props.hero.series.items.map(item => {
                                return <li key={item.name}>{item.name}</li>
                                })
                                }
                            </ul>
                        </div>
                        <a href="#" onClick={ this.handleGetHeroesList.bind(this) }> Retour à la liste </a>
                </div>
        );
    }
}


export default HeroDetails;