import React, { Component } from "react";
import "./app.css";
import { Search } from "./Component/Search/Search.Component.jsx";
import { University } from "./Component/University/University.Component";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      universties: [],
      search: "",
    };
  }
  componentDidMount() {
    fetch("http://universities.hipolabs.com/search?country=pakistan")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ universties: data });
      });
  }
  changeFun = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    const { search, universties } = this.state;
    const filteredUniversties = universties.filter((university) => {
      return university.name.toLowerCase().includes(search.toLowerCase());
    });

    console.log(filteredUniversties);
    return (
      <div className="app">
      <div className="title"><h1>universties Of <span>pakistan</span></h1></div>
        <Search placeholder="Search Universties" inputChange={this.changeFun} />
        <div className="university-container">
          {filteredUniversties.map((university, index) => {
            return (
              <University
                key={index}
                name={university.name}
                country={university.country}
                link={university["web_pages"][0]}
                linkText="Visit University"
              />
            );
          })}
        </div>
      </div>
    );
  }
}
