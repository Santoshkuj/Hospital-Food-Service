import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthRoute from './auth/auth';
import ManagerDashboard from './pages/ManagerPages/ManagerDashboard';
import PantryDashboard from './pages/pantry/PantryDashboard';
import DeliveryDashboard from './pages/delivery/DeliveryDashboard';
import 'antd/dist/reset.css';
import Home from './pages/Home';
import Navbar from './components/common/Navbar';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className='w-full h-screen'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path="/Manager" element={
          <AuthRoute allowedRoles={['Manager']}>
            <ManagerDashboard />
          </AuthRoute>
          } />
        <Route path="/pantry" element={
          <AuthRoute allowedRoles={['pantry']}>
            <PantryDashboard />
          </AuthRoute>
          } />
        <Route path="/delivery" element={
          <AuthRoute allowedRoles={['delivery']}>
          <DeliveryDashboard />
          </AuthRoute>
          } />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
