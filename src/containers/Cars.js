import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
export default class Cars extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  getCars() {
    axios.get('/api/v1/cars').then((response) => console.log(response.data));
  }

  componentDidMount() {
    this.getCars();
  }

  render() {
    return <div></div>;
  }
}
