import{ Routes, Route} from 'react-router-dom';

import HomePage from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" component={HomePage}/>
    </Routes>
  );
}

export default App;
