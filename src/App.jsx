import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Pricing from "./components/Pricing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>}></Route>
      <Route path="/features" element={<Features/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/pricing" element={<Pricing/>}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
