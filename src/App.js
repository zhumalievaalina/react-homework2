import React from "react";
import Index from "./components/userList";

const DATA = [
  {
    id:1,
    tittle: "Specialization",
    body: 'Organizational structure is a network of relationships in which the work is divided into units and departments. This division of work is helping in bringing specialization in various activities of concern.',

  },
  {
    id:2,
    tittle: "Well defined jobs",
    body: 'Organizational structure helps in putting right men on right job which can be done by selecting people for various departments according to their qualifications, skill and experience. This is helping in defining the jobs properly which clarifies the role of every person.',
  },
  {
    id:3,
    tittle: "Clarifies authority",
    body: 'Organizational structure helps in clarifying the role positions to every manager (status quo). This can be done by clarifying the powers to every manager and the way he has to exercise those powers should be clarified so that misuse of powers do not take place. Well defined jobs and responsibilities attached helps in bringing efficiency into managers working. This helps in increasing productivity.',
  },
  {
    id:4,
    tittle: "Co-ordination",
    body: 'Organization is a means of creating co-ordination among different departments of the enterprise. It creates clear cut relationships among positions and ensure mutual co-operation among individuals. Harmony of work is brought by higher level managers exercising their authority over interconnected activities of lower level manager.',
  },
  {
    id:5,
    tittle: "Effective administration",
    body: 'The organization structure is helpful in defining the jobs positions. The roles to be performed by different managers are clarified. Specialization is achieved through division of work. This all leads to efficient and effective administration.',
  }
]
const App = () => {
  return (
      <div>
        {DATA.map((item, idx) => (
            <Index
                key={idx}
                Id={item.id}
                Tittle={item.tittle}
                Body={item.body}
            />
        ))}
      </div>
  );
}

export default App;
