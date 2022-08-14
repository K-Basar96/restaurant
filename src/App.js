import './App.css';
import Restaurant from './Components/Restaurant';

function App() {
  return (
    <div className="App">
      <h1 className='welcome message'>Welcome to Sweetheart Restaurant</h1>
      <Restaurant/>
      <h2 className='bye message'>We hope you enjoyed and hope to see you again soon.</h2>
    </div>
  );
}

export default App;