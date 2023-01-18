import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  margin: ${p => p.theme.space[3]}px auto 0;
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.small};
  background: ${p => p.theme.colors.tertiary};
  background: linear-gradient(
    90deg,
    #a37cfc 0%,
    #ad42ff 35%,
    #781893 86%,
    #bc8cd4 100%
  );
  text-align: center;
  display: inline-block;
  color: ${p => p.theme.colors.white};
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.space[5]}px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semibold};
  width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    outline: none;
    background: ${p => p.theme.colors.accent};
    background: linear-gradient(
      90deg,
      #fbff02 0%,
      #c5b502 35%,
      #a39e0b 86%,
      #d4d48c 100%
    );
  }
`;

export const LoadMoreButton = ({ onClick, children }) => {
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  );
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
