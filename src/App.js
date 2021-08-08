import './App.css';
import Dashboard from './layouts/Dashboard';
import AdminDashboard from "./Admin/AdminLayouts/AdminDashboard";
import { Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <Dashboard></Dashboard>
    {/* <AdminDashboard></AdminDashboard> */}
     
    </div>
  );
}

export default App;
