import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import DashBoard from "./pages/StaffManager/DashBoard/Dashboard";



import Profile from "./pages/Profile/Profile";
import Header from "./components/Header/Header";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import StudentRoute from "./components/PrivateRoute/StudentRoute";

import AdminRoute from "./components/PrivateRoute/AdminRoute";

import StudentInfo from "./pages/Admin/Student/StudentInfo";

import ReceptionistsInfo from "./pages/StaffManager/DashBoard/Receptionists_Record/Receptionist_Info";
import DoctorsInfo from "./pages/StaffManager/DashBoard/Doctors_Record/Doctor_Info";
import RadiologistsInfo from "./pages/StaffManager/DashBoard/Radiologists_Record/Radiologist_Info";




const Routing = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user)
  useEffect(() => {
    if (!user) {
      history.push("/login");
    } else {
      dispatch({ type: "SET__USER", payload: user });
    }
  }, []);
  return (
    <Switch>
      <StudentRoute exact path="/">
        <DashBoard />
      </StudentRoute>
      <StudentRoute exact path="/Receptionist_Info">
        <ReceptionistsInfo/>
      </StudentRoute>
      <StudentRoute exact path="/Doctor_Info">
        <DoctorsInfo/>
      </StudentRoute>
      <StudentRoute exact path="/Radiologist_Info">
        <RadiologistsInfo/>
      </StudentRoute>


     
      <AdminRoute exact path="/admin-dashboard">
        <AdminDashboard />
      </AdminRoute>

     
      
      <AdminRoute exact path="/admin/student-info">
        <StudentInfo />
      </AdminRoute>
      
      
      <Route exact path="/profile">
        <Profile />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      
      
    </Switch>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routing />
      </Router>
    </div>
  );
}

export default App;
