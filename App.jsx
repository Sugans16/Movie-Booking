import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import MoviesPage from './components/MoviesPage';
import TheaterPage from './components/TheaterPage';
import ConfirmationPage from './components/ConfirmationPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/Movies" element={<MoviesPage />} />
          <Route path="/theater" element={<TheaterPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
