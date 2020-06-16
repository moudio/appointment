import React from 'react';
import './App.css';
import Cars from './containers/Cars';
import { connect } from 'react-redux';
function App() {
  return (
    <div className="App">
      <Cars />
    </div>
  );
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = (props) => {};
export default connect(mapStateToProps, mapDispatchToProps)(App);
