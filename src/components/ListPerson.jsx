import { useState } from "react";

const firstPerson = {
  name: "John",
  age: 20,
  gender: "male",
  job: "waitress",
};

const secondPerson = {
  ...firstPerson,
  name: "Doe",
  age: 22,
};

const ListPerson = () => {
  const [personState, setPersonState] = useState(firstPerson);
  return (
    <div>
      <button onClick={() => setPersonState(firstPerson)}>First Person</button>
      <button onClick={() => setPersonState(secondPerson)}>
        Second Person
      </button>
      <ul>
        {Object.keys(personState).map((keyObj, key) => (
          <li key={key}>
            {keyObj}:{personState[keyObj]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPerson;
