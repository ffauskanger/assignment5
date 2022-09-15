import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import SignupPage from './Views/SignupPage';
import ProfilePage from './Views/ProfilePage';
import TranslatePage from './Views/TranslatePage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
          <h2>Lost in Translation</h2>
        </header>
        {/*Fix me routing error*/}
        <Routes>
        <Route path= '/' element={ <SignupPage /> } />
        <Route path='/Profile' element={ <ProfilePage /> } />
        <Route path='/Translate' element={ <TranslatePage /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
