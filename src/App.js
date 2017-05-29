import React, {Component} from 'react';
import List from './List';
import SearchBar from './SearchBar';
import axios from 'axios';

export default class App extends Component {

    constructor(props){
        super(props);
        //Setting the initial state
        this.state = {
            pokemon: [],
            filterText: ''
        };

    }
    //Updating the state with current value
    filterUpdate = (value) => {
        this.setState({ filterText: value })
    };

    //When component is added to the DOM we can fetch data
    componentDidMount(){
        return axios.get("http://pokeapi.co/api/v2/pokemon")
            .then((response) => {
            this.setState({ pokemon: response.data.results})
        })
    }

    render(){

        //styles
        const appComponent = {
            top: 0,
            left: 0,
            right: 0,
            padding: 40,
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
        };

        return(
            //Passing properties to child components
            <div style={appComponent}>
                <SearchBar filterText={this.state.filterText}
                           filterUpdate={this.filterUpdate.bind(this)}/>
                <List pokemon={this.state.pokemon}
                      filterText={this.state.filterText}/>
            </div>
        )
    }
}

