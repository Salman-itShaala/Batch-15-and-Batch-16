import React, { useState } from "react";

function Tabs() {
  const [tab, setTab] = useState("all"); // music, movies, shorts

  return (
    <div>
      <div>
        <button onClick={() => setTab("all")}>All</button>
        <button onClick={() => setTab("music")}>Music</button>
        <button onClick={() => setTab("movies")}>Movies</button>
        <button onClick={() => setTab("shorts")}>Shorts</button>
      </div>
      <div>
        {tab === "all" && <h1>All content</h1>}
        {tab === "music" && <h1>Musics</h1>}
        {tab === "movies" && <h1>Movies</h1>}
        {tab === "shorts" && <h1>Shorts</h1>}
      </div>
    </div>
  );
}

export default Tabs;
