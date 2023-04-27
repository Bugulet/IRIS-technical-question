import logo from './logo.svg';
import './App.css';

//theme
import "primereact/resources/themes/md-light-indigo/theme.css";     
//core
import "primereact/resources/primereact.min.css";  
import "primeflex/primeflex.min.css"

import MainApplicationPage from './pages/MainApplicationPage';
function App() {
  return (
    <div className="App">
      <MainApplicationPage/>
    </div>
  );
}

export default App;
