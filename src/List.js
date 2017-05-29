import React, {Component} from 'react';


export default class List extends Component {

    render(){

        //styles
        const listStyle = {listStyleType: 'none'};

        const pokeList = {
            top: 90,
            left: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
        };

        const { pokemon, filterText } = this.props;

        const pokemonList = pokemon
            .filter(name => {
                //remove names that do not match current filter text
                return name.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
            })
            //iterating through data and adding data to the DOM
            .map(name => {
            return <li key={name.name} style={listStyle}>{name.name}</li>
        });

        return(
            <div style={pokeList}>
                <ul>{pokemonList}</ul>
            </div>
        )
    }
}

