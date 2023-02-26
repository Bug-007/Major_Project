import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Main from "./components/user";
import Signin from "./components/user/Signin";
import Signup from "./components/user/Signup";
import UserAuth from "./auth/UserAuth";
import User from "./components/doctor";
import UserProfile from "./components/doctor/UserProfile";
import AdminProfile from "./components/admin/AdminProfile";
import NotFound from "./components/NotFound";
import AdminAuth from "./auth/AdminAuth";
import UserProvider from "./context/UserProvider";
import AdminProvider from "./context/AdminProvider";
import { useState } from "react";
import RightBar from "./components/user/RightBar";
import Reciept from "./components/user/Reciept";
import Upload from "./components/user/Upload";
import PermissionTab from "./components/user/PermissionTab";
import Laboratory from "./components/laboratory/Index";
import UploadPage from "./components/user/Upload";
import UploadPageTab from "./components/laboratory/UploadPageTab";
import Doctor from "./components/doctor/index"

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );

  return (
    <BrowserRouter>
      {/* <AdminProvider currentUser={currentAdmin}>
        <UserProvider currentUser={currentUser}> */}
          <Routes>
            <Route element={<Navigate to="/user/home" />} path="/" />
            <Route
              element={
                // <AdminAuth>
                // </AdminAuth>
                <Admin />
              }
              path="admin"
            >
              <Route element={<AdminProfile />} path="profile" />
            </Route>

            <Route element={<Main />} path="user">
              <Route element={<RightBar />} path="home" />
              <Route element={<Reciept />} path="reciept" />
              <Route element={<Upload />} path="upload" />
              <Route element={<PermissionTab />} path="permission" />
            </Route>

            <Route element={<Laboratory />} path="laboratory">
              <Route element={<UploadPageTab />} path="home" />
            </Route>
            
            <Route element={< ></>} path="doctor">
              <Route element={<Doctor />} path="home" />
            </Route>

            <Route
              element={
                // <UserAuth>
                // </UserAuth>
                <User />
              }
              path="user"
            >
              <Route path="profile" element={<UserProfile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        {/* </UserProvider>
      </AdminProvider> */}
    </BrowserRouter>
  );
}

export default App;
