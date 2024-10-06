import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import UserDetails from './pages/dashboard/userDetail';
import TeamProjects from './pages/dashboard/teamProjects';
import UserActivity from './pages/dashboard/userActivity';
import LoginPage from './pages/auth/login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/:email" element={<UserDetails />} />
        <Route path="/users/activity" element={<UserActivity />} />
        <Route path="/team-members" element={<TeamProjects />} />
        <Route path="*" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
