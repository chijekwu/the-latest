import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import LocalNews from './component/news/LocalNews'
import ScienceNews from './component/news/ScienceNews'
import Sports from './component/news/Sports'
import WeatherSearch from './component/weather/WeatherSearch'

const routing = ( 
  <Router >  
  <div className="header">  
  <h1>TheNow</h1>  
  <ul>  
  <li>  
  <NavLink to="/" exact activeStyle={{color:'green'}}>Home</NavLink>  
  </li>  
  <li>  
  <NavLink to="/localnews" exact activeStyle={{color:'blue'}}>Local News</NavLink>  
  </li>  
  <li>  
  <NavLink to="/sciencenews" exact activeStyle={{color:'crimson'}}>Science News</NavLink>  
  </li>
  <li>  
  <NavLink to="/sportsnews" exact activeStyle={{color:'crimson'}}>Sports News</NavLink>  
  </li>
  <li>  
  <NavLink to="/weathersearch" exact activeStyle={{color:'crimson'}}>Weather</NavLink>  
  </li> 
  </ul>  
  <Route exact path="/" component={App} />  
  <Route path="/localnews" component={LocalNews} />  
  <Route path="/sciencenews" component={ScienceNews} /> 
  <Route path="/sportsnews" component={Sports} />
  <Route path="/weathersearch" component={WeatherSearch} />   
  </div>  
  </Router>  
  ) 
ReactDOM.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
