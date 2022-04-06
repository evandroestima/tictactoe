import Game from './components/game/index';

function App() {
  return (
    <div style={{
      backgroundColor: '#b75dff',
      color: '#EDFF44',
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
    }}>
      <Game />
    </div>
  );
}

export default App;
