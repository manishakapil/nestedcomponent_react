import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import './App.css';
import Dashboard from './views/Dashboard';
import Signin from './views/Signin';
import Signup from './views/Signup';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes> {/* these are all registered routes for our react application */}
            <Route path="/" exact element={<Dashboard/>} /> {/* render dashboard component at / path */}
            <Route path="/signup" element={<Signup/>} />
            <Route path="/signin" element={<Signin/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}


export default App;


// 737214277698-t496evv1e1baof0mkhki6u6rk3qd3qvf.apps.googleusercontent.com

