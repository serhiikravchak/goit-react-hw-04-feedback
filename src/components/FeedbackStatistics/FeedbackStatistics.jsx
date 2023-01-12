import PropTypes from 'prop-types';
import { Box  } from 'components/common/GlobalStylex.styled';
import { Item, List, Positive } from './FeedbackStatistics.styled';

export function FeedbackStatistics({ list, total, positive }) {
  const items = Object.keys(list);
   return (
     <Box>
       <List>
         {items.map(item => {
           return (
             <Item key={item}>
               {item}: {list[item]}
             </Item>
           );
         })}
       </List>
       <p>Total: {total} </p>
       <p>
         Positive percentage: <Positive>{positive}%</Positive>
       </p>
     </Box>
   );
}

FeedbackStatistics.propType = {
  list: PropTypes.shape.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
