import React, { Component } from 'react';

import './App.css';

import contacts from './contacts.json'

import ContactDisplay from './ContactDisplay'

class App extends Component {

  state = {
    contactList : contacts.splice(0,5)
  }

  AddRandomContact = () =>{
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const contactList = [...this.state.contactList, randomContact];
    this.setState({
      contactList
    })
  }

  SortByName = () => {
    
    const contactList = [...this.state.contactList];

    contactList.sort(function (a, b) {
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });

    this.setState({
      contactList
    })
  }

  SortByPopularity = () => {
    const contactList = [...this.state.contactList];

    contactList.sort(function (a, b) {
      if(a.popularity < b.popularity) return -1;
      if(a.popularity > b.popularity) return 1;
      return 0;
    });

    this.setState({
      contactList
    })
  }

  deleteContact = (id) => {
    const contactList = this.state.contactList.filter( contact => {
      return contact.id !== id;
    });
    this.setState({
      contactList
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronHackk Contact</h1>
        </header>
        <button onClick={this.AddRandomContact} >Add Random Contact</button>
        <button onClick={this.SortByName} >Sort by Name</button>
        <button onClick={this.SortByPopularity} >Sort By Popularity</button>
        <ContactDisplay contacts={this.state.contactList} deleteContact={this.deleteContact}/>
      </div>
    );
  }
}

export default App;
