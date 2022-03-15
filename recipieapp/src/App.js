import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import DisplaySearchResults from "./component/DisplaySearchResults";

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DisplayFullRecipe from "./component/DisplayFullRecipe";

const URL = "https://api.spoonacular.com/recipes";
const APIKEY = "apiKey=35625ab39e914c87a28abd562499f05d";

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentRecipeID, setCurrentRecipeID] = useState("");
  const [currentRecipeInfo, setCurrentRecipeInfo] = useState([]);

  // useEffect(() =>{
  //   if(!search) return
  //   console.log(search)
  // },[search])

  // useEffect(() =>{
  //   if(!searchResults)return
  //   console.log(searchResults)
  // },[searchResults])

  const searchRecipes = () => {
    if (!search) return;
    let searchQuery =
      URL + "/complexSearch/" + "?query=" + search + "&".toLowerCase();
    axios
      .request(searchQuery + APIKEY)
      .then((response) => {
        setSearchResults(response.data["results"]);
      })
      .catch((error) => console.log(error));
  };

  const updateCurrentID = (id) => {
    setCurrentRecipeID(id);
    let searchQuery = (URL + "/" + id + "/information?").toLowerCase();
    axios
      .request(searchQuery + APIKEY)
      .then((response) => {
        setCurrentRecipeInfo(response.data);
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
  };

  return (
    <article className="App">
      <div id="titleHeading">Recipe's from spoonacular API</div>
      <Row>
        <Col xs={4}>
          <section id="searchBoxContainer">
            <input
              id="searchBox"
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button id="searchButton" onClick={searchRecipes}>
              SEARCH
            </button>
          </section>
          <section id="recipeResultsContainer">
            {searchResults.map((recipe, index) => (
              <DisplaySearchResults
                recipe={recipe}
                recipeID={recipe.id}
                key={index}
                IDSearch={updateCurrentID}
              />
            ))}
          </section>
        </Col>
        <Col>
          <DisplayFullRecipe recipe={currentRecipeInfo} />
          {/* {currentRecipeInfo.map((recipe, index) => (
            <DisplayFullRecipe 
              recipe = {recipe}
              key = {index}
            />
          ))} */}
        </Col>
      </Row>
    </article>
  );
}

export default App;
