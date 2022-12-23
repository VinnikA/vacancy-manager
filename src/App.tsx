import { Route, Routes } from 'react-router-dom';
import LogInPage from './pages/login';
import AppMain from './pages/app-main';
import SignUpPage from './pages/signup';
import UserMain from './pages/user-main';
import NotFound from './pages/notfound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserMain />} />
      <Route path="/welcome" element={<AppMain />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
