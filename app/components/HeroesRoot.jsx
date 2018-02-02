import React from "react"
import Heroes from "./Heroes"
import HeroDetails from "./HeroDetails"
import md5 from "crypto-js/md5"

const API_PRIVATE = "b0223681fced28de0fe97e6b9cd091dd36a5b71d"
const API_PUBLIC = "298bab46381a6daaaee19aa5c8cafea5"
const BASE_URL = "http://gateway.marvel.com/v1/public/characters"

class HeroesRoot extends React.Component {
    constructor() {
        super();
        this.state = {
            heroes:[],
            hero:{},
            view:"list",
        }
    }

    componentWillMount() {
        this.getAllHeroes()
    }

    getAuth(){
        let ts = new Date().getTime();
        let hash = md5(ts + API_PRIVATE + API_PUBLIC).toString()
        return "&ts=" + ts + "&apikey=" + API_PUBLIC + "&hash=" + hash 
    }

    getAllHeroes(){
        let ts = new Date().getTime();        
        let hash = md5(ts + API_PRIVATE + API_PUBLIC).toString()
        let req = BASE_URL +  "?limit=100" + this.getAuth()
        fetch(req)
        .then(res =>{
            return res.json();

        })
        .then( content => {
            this.setState({heroes:content.data.results})
            this.setState({view:"list"})
        })
    }

    getHeroDetail(heroid){
        let ts = new Date().getTime();        
        let hash = md5(ts + API_PRIVATE + API_PUBLIC).toString()
        let req = BASE_URL + "/" + heroid  + "?limit=100" + this.getAuth()
        fetch(req)
        .then(res =>{
            return res.json();

        })
        .then( content => {
            this.setState({hero:content.data.results[0]})
            this.setState({view:"details"})
        })
    }

    handleGetHero(heroid) {
        this.getHeroDetail(heroid)
    }

    handleGetHeroesList(){
        this.setState({view:"list"})
    }
  
    render() {
        return (            
            <div>
                { (this.state.view) == "list" &&
                    <Heroes heroes={this.state.heroes} getHero={ this.handleGetHero.bind(this) } />
                }
                { (this.state.view) == "details" &&
                    <HeroDetails hero={this.state.hero} getHeroesList={ this.handleGetHeroesList.bind(this) }  />
                }
        </div>
        );
    }
}



export default HeroesRoot;