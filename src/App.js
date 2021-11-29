import React, { useState } from "react";
import Search from "./Search";
import Filter from "./Filter";
import EmojiResult from "./EmojiResult";

function App() {
  const [filtered, setFiltered] = useState([]);

  const handleSearch = (e) => {
    setFiltered(Filter(e.target.value, 20));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h1>Emoji Search</h1>
            <Search submit={handleSearch} />
            <EmojiResult data={filtered} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
