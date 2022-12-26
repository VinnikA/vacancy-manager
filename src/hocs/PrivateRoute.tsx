import { Navigate } from 'react-router-dom';

interface IPrivateRoute {
  children: JSX.Element;
}

export default function PrivateRout({ children }: IPrivateRoute) {
  const auth = false;
  if (auth) {
    return children;
  }
  return <Navigate to="/welcome" />;
}
