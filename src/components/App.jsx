import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { FeedbackStatistics } from './FeedbackStatistics/FeedbackStatistics';
import { Notification } from './FeedbackStatistics/Notification';
import { Box } from './common/GlobalStylex.styled';
import { Section } from './common/Section';



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  handleFeedback = data => {
    this.setState(prevState => {
      return {
        [data]: prevState[data] + 1,        
      }
    })
  };

  countTotalFeedback = () => {
    let total = Object.values(this.state).reduce((acc, item) => {
      return acc + item;
    }, 0);
    return total
  };

  countPositiveFeedback = () => {
    let percentage = ((this.state.good * 100) / this.countTotalFeedback()).toFixed(0);
    return percentage;
  };
     
  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedback();
    return (
      <Box>
        <Section title="Please leave feedback">
          <FeedbackOptions
            state={this.state}
            feedbackClick={this.handleFeedback}
          />
        </Section>
        <Section title="Feedback statistics">
          {totalFeedback ? (
            <FeedbackStatistics
              list={this.state}
              total={totalFeedback}
              positive={positiveFeedback}
            />
          ) : (
            <Notification alert={'No feedback given'} />
          )}
        </Section>
      </Box>
    );
    
  }


}


// sdfsg