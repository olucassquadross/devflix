import './App.css';

function App() {
  const Hello = () => { alert("Hello"); }

  return (
    <>
      <h1 className='title'>DevFlix - Seus conteúdos online!</h1>
      <p className='text'>Aqui você encontra seus vídeos sobre programação.</p>
      <button onClick={Hello}>Saiba Mais</button>
    </>
  )
}

export default App;
