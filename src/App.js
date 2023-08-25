import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return (
    <h1>Im shopper</h1>
  )
}
const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
        </Route>
    </Routes>        
  )
}

export default App;
