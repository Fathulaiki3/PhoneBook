import React, {useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link  
} from "react-router-dom";
import HomePage from './pages/HomePage';
import SecondPage from './pages/SecondPage';
import './App.css';
// import { SearchCircleOutline } from 'react-ionicons'
// import { BiSearchAlt } from 'react-icons/bi';
function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}
function App() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  console.log(windowDimensions)
  return (
    <Router>
    <div className='Container'>
      <div className={'Top-Navigation'}>
        <div className={'left-side '}>
          <div className={windowDimensions.width < 667 ?('md-styling'):('')}>
            PhoneBook
          </div>
          <input placeholder={'Search'} className={'searchbar'}>

          </input>
          <div className={'newcontactbutton-md'}>
          {
            windowDimensions.width > 963 &&
            <Link  style={{textDecoration: 'none', fontSize:14, color:'white'}} to='/addedit'>
              New Contact
            </Link>
          }
          {
            windowDimensions.width < 963 &&
            <Link to='/addedit'>
              <div  style={{textDecoration: 'none', fontSize:18, fontWeight:'bold', color:'white', height:'100%', width:'100%'}}>+</div>
            </Link>
          }
         </div>
        </div>
        <div className={'right-side'}>
          <div className={windowDimensions.width < 509 ?('md-styling'):('')}>
            Fathul Aiki
          </div>
        </div>
      </div>

      <hr />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/addedit">
          <SecondPage style={{height:'100%'}} />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
