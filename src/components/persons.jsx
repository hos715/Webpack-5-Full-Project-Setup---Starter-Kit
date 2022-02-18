// @refresh reset
import { useState } from "react";

const hossein = {
  name: "Hossein",
  age: 29,
  gender: "male",
  job: "developer"
};
const ryan = {
  name: "Ryan",
  age: 3,
  gender: "male",
  job: "what? I've just three years old :/",
};
console.log(hossein);
console.log(ryan);

const Persons = () => {
  const [info, setInfo] = useState({});
  return (
    <>
      <h3>users bla bla bla Informations</h3>
      <button onClick={() => setInfo(hossein)}>Hossein's Info</button>
      <button onClick={() => setInfo(ryan)}>Ryan's Info</button>
      <ul>
          {Object.keys(info).map((elem)=>(
              <li key={elem}>
                  {elem}: {info[elem]}
              </li>
          ))}
      </ul>
    </>
  );
};

export default Persons;
