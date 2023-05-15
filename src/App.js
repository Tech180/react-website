import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar2';
import Home from './components/pages/home';
//import Resume from './components/pages/resume';
//import Hero from './components/hero';
//import FloatingButton from './components/floatingButton';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      {/*<Routes>
        <Route path = '/' exact component= {Home}/>
        <Route path='/resume' component={Resume}/>
      </Routes>
      */}
    </Router>
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  }
});
*/


