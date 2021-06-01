import React from "react";

const List = ({ people, remove }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt="img" />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <div>
                <button onClick={() => remove(id)} style={{ width: "7rem" }}>
                  remove
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
