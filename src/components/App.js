import React from "react";
import Content from "./Content";
import '../styles/App.css';
import '../styles/AppResponsive.css';

function App() {

  function updateTitle() {
    var titles = ['Mon Portfolio', 'Maxime Dhénin']; // Tableau contenant les différents titres
    var index = 0; // Index actuel
  
    setInterval(function() {
      document.title = titles[index]; // Mettre à jour le titre avec l'élément correspondant dans le tableau
  
      index++; // Incrémenter l'index
      if (index === titles.length) {
        index = 0; // Réinitialiser l'index si on atteint la fin du tableau
      }
    }, 3000); // Mettre à jour toutes les 3 secondes
  };

  updateTitle();

  return (
    <div className="App">

      <Content />

    </div>
  );
}

export default App;
