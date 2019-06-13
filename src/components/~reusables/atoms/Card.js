import styled from 'styled-components';
import { medium_space, normal_space } from '../variables/spacing';
import { white } from '../variables/colors';

export const Card = styled.div`
  display: flex;
  padding: ${medium_space} ${normal_space};
  background-color: ${white};
  box-shadow: 0 6px 10px 0 rgba(40,51,63,0.08);
  border-radius: 6px;
  overflow: hidden;

  ${props => (props.row ? `flex-direction: row;` : null)}
  ${props => (props.noPadding ? `padding: 0;` : null)}
  ${props => (props.fullWidth ? `width: 100%;` : null)}
  ${props => (props.maxWidth ? `max-width: ${props.maxWidth};` : null)}
  ${props => (props.margin ? `margin: ${props.margin};` : null)}
`;