import ErrorPage from 'pages/ErrorPage';
import TweetsPage from 'pages/TweetsPage';
import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/tweets' element={<TweetsPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
