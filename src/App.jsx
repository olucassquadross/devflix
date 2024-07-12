import './App.css';
import logo from './logo.png'; // Coloque o arquivo logo na pasta src
import featuredImage from './assets/featured-image.jpg';
import vikings from './assets/vikings.jpg';
import peakyBlinders from './assets/peaky_blinders.jpg';
import marcoPolo from './assets/marco_polo.jpg';
import bridgerton from './assets/bridgerton.jpg';

function App() {
  const handleLearnMore = () => {
    alert("Learn more about our contents!");
  };

  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="Netflix Logo" className="logo" />
        <nav>
          <ul>
            <li>Início</li>
            <li>Séries</li>
            <li>Filmes</li>
            <li>Bombando</li>
            <li>Minha lista</li>
          </ul>
        </nav>
      </header>
      <div className="featured">
        <img src={featuredImage} alt="Featured" className="featured-image" />
        <div className="featured-content">
          <h1 className="title">Vikings Valhalla</h1>
          <div className="buttons">
            <button className="play-button">Assistir</button>
            <button className="info-button" onClick={handleLearnMore}>Mais Informações</button>
          </div>
        </div>
      </div>
      <div className="content">
        <h2>Séries dramáticas de época</h2>
        <div className="row">
          <div className="movie">
            <img src={vikings} alt="Vikings" />
            <p>Vikings</p>
          </div>
          <div className="movie">
            <img src={peakyBlinders} alt="Peaky Blinders" />
            <p>Peaky Blinders</p>
          </div>
          <div className="movie">
            <img src={marcoPolo} alt="Marco Polo" />
            <p>Marco Polo</p>
          </div>
          <div className="movie">
            <img src={bridgerton} alt="Bridgerton" />
            <p>Bridgerton</p>
          </div>
        </div>
      </div>
      {/* Adicione mais seções conforme necessário */}
    </div>
  );
}

export default App;
