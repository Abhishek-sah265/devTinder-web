import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Body } from "./components/Body";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { Feed } from "./components/Feed";
import { appStore } from "./utils/appStore";
import { Provider } from "react-redux";
import { Connections } from "./components/Connections";

export function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            {/* inside the body we are creating multiple children routes 
           and parent should render the children in an <Outlet /> */}
            <Route path="/" element={<Body />} >
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}
