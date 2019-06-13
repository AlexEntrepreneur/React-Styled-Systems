import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  ${props => (props.vCenter ? `justify-content: center;` : null)}
  ${props => (props.column ? `flex-direction: column;` : null)}
  ${props => (props.hCenter ? `align-items: center;` : null)}
  ${props => (props.padding && Array.isArray(props.padding) ? `padding: ${props.padding.join(' ')};` : props.padding && !Array.isArray(props.padding) ? `padding: ${props.padding};` : '')}
  ${props => (props.width ? `width: ${props.width};` : null)}
  ${props => (props.bgColor ? `background-color: ${props.bgColor};` : null)}
`;