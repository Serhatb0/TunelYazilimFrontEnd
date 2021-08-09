import './App.css';
import Dashboard from './layouts/Dashboard';
import AdminDashboard from "./Admin/AdminLayouts/AdminDashboard";
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Switch>
      <Route  path="/admin"  component={AdminDashboard}/>
      <Route path="/"  component={Dashboard}/>
      </Switch>
      {/* <Dashboard ></Dashboard> */}
    {/* <AdminDashboard></AdminDashboard> */}
     
    </div>
  );
}

export default App;
