import React from "react"
import Hero from "./Hero"

class Heroes extends React.Component {

    handleGetHero(heroid){
        this.props.getHero(heroid)
    }

    render() {
        return (            
            <div>
                {this.props.heroes.map(hero => {
                    return <Hero 
                                key={hero.id} 
                                heroid={hero.id} 
                                name={hero.name} 
                                thumburl={hero.thumbnail.path + "." + hero.thumbnail.extension}
                                getHero={ this.handleGetHero.bind(this) }
                            />
                })
                }
            </div>
        );
    }
}

export default Heroes;