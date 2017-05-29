import React, {Component} from 'react';


export default class SearchBar extends Component {

    filterUpdate = () => {
        const val = this.newValue.value;
        this.props.filterUpdate(val);
    };
    render(){
        return (
        <div>
            <form>
                <input type="text"
                       placeholder="type..."
                    //refs is a way to access value of a DOM element
                       ref={(value) => {this.newValue = value} }
                       onChange={this.filterUpdate.bind(this)}
                />
            </form>
        </div>
        )
    }
}
