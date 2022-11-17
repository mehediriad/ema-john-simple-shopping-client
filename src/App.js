import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import OrderReview from './Components/OrderReview/OrderReview';
import Orders from './Components/Orders/Orders';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        {/* <Route path='/' element={<Home/>} /> */}
        <Route path='/' element={<Shop/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/order' element={<Orders/>} />
        <Route path='/order-review' element={<OrderReview/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
     
     
    </div>
  );
}

export default App;
