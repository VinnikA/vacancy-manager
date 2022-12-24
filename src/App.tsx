import { Route, Routes } from 'react-router-dom';
import LogInPage from './pages/login';
import Welcome from './pages/welcom';
import SignUpPage from './pages/signup';
import Main from './pages/main';
import NotFound from './pages/notfound';
import PrivateRout from './hocs/PrivateRout';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRout>
            <Main />
          </PrivateRout>
        }
      />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
