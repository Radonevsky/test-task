import React from 'react';
import './App.css';
import Header from './Components/Header'
import Navbar from './Components/Navbar';
import Applications from './Components/Applications/Applications';
import {Redirect, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
  <div className='app-wrapper'>
    <Header/>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={()=> <Redirect to='/applications'/>}/>
      <Route path='/knowledge' component={() => {
        return <div className='cap'>База знаний</div>}}/>
      <Route path='/applications' component={Applications}/>
      <Route path='/staff' component={() => {
        return <div className='cap'>Сотрудники</div>}}/>
      <Route path='/clients' component={() => {
        return <div className='cap'>Клиенты</div>}}/>
      <Route path='/assets' component={() => {
        return <div className='cap'>Активы</div>}}/>
      <Route path="/settings" component={() => {
        return <div className='cap'>Настройки</div>}}/>
      <Route path="*" component={() => {
        return <div className='cap'>404 NOT FOUND</div>}}/>
    </Switch>
  </div>
  );
}

export default App;
