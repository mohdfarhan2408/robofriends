import React, { Component } from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import Scroll from './Scroll.js';


class App extends Component {
    constructor() { 
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

   componentDidMount() {
       fetch ('https://jsonplaceholder.typicode.com/users').then(response=> {
           return response.json();
       }).then(users => {
         this.setState({robots: users})
        }); 
   }       

    onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value });
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
        return (
            <div className="tc">
                <h1>RoboFriends</h1>    
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>  
            </div>
            );
        } 
    }
}       

export default App;
