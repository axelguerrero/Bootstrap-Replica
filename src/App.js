import './App.css';
import StoreListings from './components/StoreListings'
import Background from './components/Background'
import TopBar from './components/TopBar'


function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;