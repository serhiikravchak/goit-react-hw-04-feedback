import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../common/GlobalStylex.styled';
import { Message} from './FeedbackStatistics.styled';

export function Notification({ alert }) {
    return (
      <Box>
        <Message>{alert}</Message>
      </Box>
    );
}

Notification.propType = {
  alert: PropTypes.string.isRequired
}