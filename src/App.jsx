function App() {
  return (
    <main className='board'>
      <h1 translate='no'>Tic tac toe</h1>
      <button>Reiniciar juego</button>
      <section className='game'></section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
