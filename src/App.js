import './App.css';
import Results from './Results';
import Summary from './Summary';

function App() {
  return (
    <div className="App lg:flex justify-center items-center lg:mt-40">
      <div className="bg-white lg:w-2/5 lg:flex rounded-3xl shadow-2xl">
        <div className="lg:w-1/2 z-10">
        <Results className='z-10' />
        </div>
        <div className="lg:w-1/2 z-0 -pl-10">
        <Summary />
        </div>
      </div>
    </div>
  );
}

export default App;
