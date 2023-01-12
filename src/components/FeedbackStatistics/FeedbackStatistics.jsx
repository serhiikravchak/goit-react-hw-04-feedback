import PropTypes from 'prop-types';
import { Box  } from 'components/common/GlobalStylex.styled';
import { Item, List, Positive } from './FeedbackStatistics.styled';

export const FeedbackStatistics =({ good,neutral,bad, total, positive })=>{
  console.log(positive)
  console.log(typeof positive) 
  return (
     <Box>
       <List>
         <Item >Good: {good}</Item>
         <Item >Neutral: {neutral}</Item>
         <Item >Bad: {bad}</Item>
       </List>
       <p>Total: {total} </p>
       <p>
         Positive percentage:<Positive>{positive}%</Positive>
       </p>
     </Box>
   );
}

FeedbackStatistics.propType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number,
};
