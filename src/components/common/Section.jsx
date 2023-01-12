import PropTypes from 'prop-types';
import { SectionWrapper } from './Section.styled';



export function Section({ title, children }) {
  return (
    <SectionWrapper>
      {title && <h2>{title}</h2>}
      {children}
    </SectionWrapper>
  );
}

Section.propType = {
    title: PropTypes.string,
    
};