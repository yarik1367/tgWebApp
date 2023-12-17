import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
const tg = window.Telegram.WebApp;

function App() {

  const {onToggleButton, tg, onClose} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
