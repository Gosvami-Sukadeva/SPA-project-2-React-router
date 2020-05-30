import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun?",
    author: "Jan Nowak",
    text:
      "1111Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente officiis delectus placeat assumenda esse repudiandae adipisci, dolorum fugit voluptate culpa quod obcaecati ducimus modi laborum libero! Earum molestiae asperiores repellat!",
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego",
    author: "Ania Kwiatkowska",
    text:
      "2222Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente officiis delectus placeat assumenda esse repudiandae adipisci, dolorum fugit voluptate culpa quod obcaecati ducimus modi laborum libero! Earum molestiae asperiores repellat!",
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia",
    author: "Jan Kowalski",
    text:
      "3333Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente officiis delectus placeat assumenda esse repudiandae adipisci, dolorum fugit voluptate culpa quod obcaecati ducimus modi laborum libero! Earum molestiae asperiores repellat!",
  },
];
const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
