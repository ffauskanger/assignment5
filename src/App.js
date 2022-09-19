import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import SignupPage from './Views/SignupPage';
import ProfilePage from './Views/ProfilePage';
import TranslatePage from './Views/TranslatePage';
import SignupForm from './Component/Signup/SignupForm';

function App() {
  console.log(process.env.REACT_APP_API_KEY)

  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
          <h2>Lost in Translation</h2>
        </header>
        {/*Fix me routing error*/}
        <Routes>
        <Route path= '/' element={ <SignupForm /> } />
        <Route path='/Profile' element={ <ProfilePage /> } />
        <Route path='/Translate' element={ <TranslatePage /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
