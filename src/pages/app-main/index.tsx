import { Link } from 'react-router-dom';
import Onboarding from '../../components/onboarding';
import './styles.css';

export default function AppMain() {
  return (
    <div>
      <h1 className="text-2xl mb-4">App Main Page</h1>
      <Onboarding />
      <Link className="py-2 px-4 border mr-4" to="/signup">
        Sign Up
      </Link>
      <Link className="py-2 px-4 border" to="/login">
        Log In
      </Link>
    </div>
  );
}
