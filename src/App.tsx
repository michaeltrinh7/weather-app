import '@fontsource/open-sans/300.css'; // Light
import '@fontsource/open-sans/400.css'; // Regular
import '@fontsource/open-sans/600.css'; // Semi-bold
import '@fontsource/open-sans/700.css'; // Bold
import './App.css';
import Header from "./components/Header";
import TopContent from './components/TopContent';
import WeatherByHour from './components/WeatherByHour';
import Next7Days from './components/Next7Days';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <main className="main-container">
      <SearchBar />
      <Header></Header>
      <TopContent></TopContent>
      <WeatherByHour></WeatherByHour>
      <Next7Days></Next7Days>
    </main>
  );
}

export default App;
