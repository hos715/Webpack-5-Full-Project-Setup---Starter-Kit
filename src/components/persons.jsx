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
  job: "what? I've just 3 years old :/",
};
console.log(hossein);
console.log(ryan);

const Persons = () => {
  const [info, setInfo] = useState({});
  return (
    <div>
      <h3>Informations</h3>
      <button onClick={() => setInfo(hossein)}>Hossein's Info</button>
      <button onClick={() => setInfo(ryan)}>Ryan's Info</button>
      <ul>
          {Object.keys(info).map((elem)=>(
              <li key={elem}>
                  {elem}: {info[elem]}
              </li>
          ))}
      </ul>
    </div>
  );
};

export default Persons;
