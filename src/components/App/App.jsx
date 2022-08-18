import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AdminPage from '../AdminPage/AdminPage';
import Header from '../Header/Header';
import PizzaList from '../PizzaList/PizzaList.jsx';
import PizzaItem from '../PizzaItem/PizzaItem.jsx';
import CustomerForm from '../CustomerForm/CustomerForm';
import {useDispatch} from 'react-redux';
import CartItem from '../CartItem/CartItem'
import Checkout from '../Checkout/Checkout'



function App() {

  const dispatch = useDispatch();

  useEffect (() => {
    refreshPizzas();
  }, []);

  const refreshPizzas = () => {
    axios.get('/api/pizza')
      .then(response => {
        console.log(response.data);
        dispatch({
          type: 'SET_PIZZAS',
          payload: response.data
        })
        }).catch(err => {
          console.log(err);
      })
  }

  return (

    <Router>
      <div className='App'>
        <Header />
        
        {/* <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p> */}
        <CartItem />
        <Route path={'/'}>
          <PizzaList />
        </Route>
        <Route path={'/form'}>
          <CustomerForm />
        </Route>
        <Route path={'/checkout'}>
          <Checkout />
        </Route>
        <Route path={'/admin'} exact>
          <AdminPage />
        </Route>
      </div>
    </Router>

  );
}

export default App;
