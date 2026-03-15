import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from "./NavBar";
import { Body } from "./Body";
import { Login } from "./Login";
import { Profile } from "./Profile";

export function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          {/* inside the body we are creating multiple children routes 
           and parent should render the children in an <Outlet /> */}
          <Route path="/" element={<Body />} >
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
