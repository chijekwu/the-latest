import './App.css';
import NewsApp from './component/news/NewsApp'
import Weather from './component/weather/WeatherCondition'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NewsApp />
       <Weather />
      </header>
    </div>
  );
}

export default App;
