import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import ProfilePage from './Views/ProfilePage';
import TranslatePage from './Views/TranslatePage';
import SignupPage from './Views/SignupPage';
import NotFound from './Views/NotFound';

function App() {
  console.log(process.env.REACT_APP_API_KEY)

  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
          <h2>Lost in Translation</h2>
        </header>
        <Routes>
        <Route path= '/' element={ <SignupPage /> } />
        <Route path='/Profile' element={ <ProfilePage /> } />
        <Route path='/Translate' element={ <TranslatePage /> } />
        <Route path='*' element={ <NotFound /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
