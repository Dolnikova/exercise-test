import styled from 'styled-components';

export const Container = styled.div`
  width: 380px;
  height: 460px;
  padding: 28px 0 50px 0;

  margin: auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;

  flex-direction: column;

  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  font-family: 'Roboto';
  font-style: normal;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;
export const Button = styled.button`
  width: 196px;
  height: 50px;
  background-color: ${props => (props.following ? '#5CD3A8' : '#EBD8FF')};
  color: ${props => (props.following ? '#373737' : '#373737')};
  border: none;
  box-shadow: ${props =>
    props.following
      ? '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)'
      : '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)'};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10.3108px;
`;

export const FollowerCount = styled.div`
  margin-bottom: 26px;
`;
