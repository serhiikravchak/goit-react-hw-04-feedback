import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {List } from './FeedbackOptions.styled'
import { Box } from 'components/common/GlobalStylex.styled';
// import { Box } from 'components/common/GlobalStylex.styled';


export class FeedbackOptions extends Component {
    handleClick = evt => {
        evt.preventDefault()
        this.props.feedbackClick(evt.target.innerText);
    }

    render() {
        const types = Object.keys(this.props.state);
      return (
        <Box>
          <List>
            {types.map(type => {
              return (
                <li key={type}>
                  <button type="button" onClick={this.handleClick}>
                    {type}
                  </button>
                </li>
              );
            })}
          </List>
        </Box>
      );
    }
};


FeedbackOptions.propType = {
    types: PropTypes.arrayOf(PropTypes.string).isRequired
};