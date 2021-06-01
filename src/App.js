import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  const remove = (id) => {
    const newData = people.filter((person) => person.id !== id);
    setPeople(newData);
  };
  return (
    <main>
      <section className="container">
        <h3> {people.length} Birthdays Todays</h3>
        <List people={people} remove={remove} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
