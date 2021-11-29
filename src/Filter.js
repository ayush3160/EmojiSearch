import React from "react";
import emojilist from "./emojilist.json";

function Filter(search, maxResults) {
  return emojilist
    .filter((emoji) => {
      if (emoji.title.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      if (emoji.keywords.includes(search)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}

export default Filter;
