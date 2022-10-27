import { React, useState } from "react";
import "./App.css";
import { Search } from "./components/Search";
//asdasdad
function App() {
  const [search, setSearch] = useState(""); //the search term for the movie
  const [selected, setSelected] = useState(""); //show the popup if true
  const [apiResults, setApiResults] = useState([]); //hold the results from the API

  const handleInput = (event) => {
    setSearch(event.target.value);
    console.log(search);
   // return { search };
  };
  const searchCall = () => {


    
  };

  return (
    <div>
      <header>
        <h1>Movie Database</h1>
        <h4>Search and then click on a Movie to see the plot</h4>
      </header>

      <Search handleInput={handleInput} search={searchCall} />
    </div>
  );
}

export default App;
