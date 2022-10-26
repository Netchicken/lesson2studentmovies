import { React, useState } from "react";
import "./App.css";
//asdasdad
function App() {
const [search, setSearch] = useState(""); //the search term for the movie
const [selected, setSelected] = useState(""); //show the popup if true 
const [apiResults, setApiResults] = useState([]); //hold the results from the API
  return   (
    <div>
      <header>
        <h1>Movie Database</h1>
        <h4>Search and then click on a Movie to see the plot</h4>
      </header>
    </div>
  );
}

export default App;
