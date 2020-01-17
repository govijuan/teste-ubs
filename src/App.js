import React from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header pageTitle="Teste Juan Coral"/>
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
