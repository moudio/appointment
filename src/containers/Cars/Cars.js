import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import './Cars.css';
import Car from '../../components/Car/Car';
import { Header, Footer, SectionsContainer, Section } from 'react-fullpage';

class Cars extends React.Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <>
        <ReactFullpage
          scrollOverflow={true}
          sectionsColor={['#4BBFC3', '#7BAABE', 'whitesmoke', '#81e4da']}
          continuousVertical={true}
          navigation
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                {this.props.cars.map((car) => {
                  return <Car car={car} />;
                })}
              </div>
            );
          }}
        />
      </>
    );
  }
}

export default Cars;
