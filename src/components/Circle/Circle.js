import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

// Animation
const flash = keyframes`
  0% {
    background-position: 20% 0
  }
  100% {
    background-position: -100% 0
  }
`;

// Circle wrapper
const Wrapper = styled.div`
  width: ${props => props.radius}px;
  min-width: ${props => props.radius}px;
  height: ${props => props.radius}px;
  border-radius: 50%;
  background: ${({ backgroundColor, colorStop }) =>
    `linear-gradient(to right, ${backgroundColor} 8%, ${colorStop} 32%, ${backgroundColor} 48%)`};
  background-size: 1000% 100%;
  animation: 1s linear infinite forwards ${flash};
`;

/**
 * Circle is a *primitive* component of app shell placeholder.
 * @class Circle
 * @extends {Component}
 */
class Circle extends Component {
  static propTypes = {
    /** Background color of circle. */
    backgroundColor: PropTypes.string,
    /** Color stop value of linear gradient. */
    colorStop: PropTypes.string,
    /** Radius of circle (in px). */
    radius: PropTypes.number
  };

  static defaultProps = {
    backgroundColor: '#eee',
    colorStop: '#ddd',
    radius: 64
  };

  render() {
    return <Wrapper {...this.props} />;
  }
}

export default Circle;
