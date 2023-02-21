/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/reduxHook';
import LogInPage from './pages/login';
import Welcome from './pages/welcome';
import SignUpPage from './pages/signup';
import Main from './pages/main';
import RestorePassPage from './pages/restorePass';
import ConfirmPassPage from './pages/confirmPass';
import NotFound from './pages/notfound';
import PrivateRout from './hocs/PrivateRoute';

function App() {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(state => state.user);
  
  useEffect(() => {
    console.log("getting current user ..");
    console.log("isAuth", isAuth);
    // dispatch(auth.getCurrentUser());
  }, [dispatch, isAuth])

  return (
    <Routes>
      <Route path="/" element={<PrivateRout><Main /></PrivateRout>} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/restorePass" element={<RestorePassPage />} />
      <Route path="/confirmPass" element={<ConfirmPassPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
