import React from 'react'
import "./Search.css";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

const Search = () => {
  return (
    <div className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input type="text" />
        <MicIcon />
      </div>

      <div className="search_buttons">
         <Button variant="outline">Googel Search</Button>
         <Button variant="outline">I'm Feeling Lucky</Button>
      </div>
    </div>
  )
}

export default Search