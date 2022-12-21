import styled from 'styled-components';

export const RegistrationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1140px;
`;

export const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  p {
    margin: 20px 0;
    font-size: 25px;
    font-weight: 700;
    line-height: 40px;
  }
`;

export const FirstSection = styled.section`
  display: flex;
  label {
    display: inline-block;
    margin: 10px 0 0 40px;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
  }

  select,
  input {
    height: 50px;
    width: 95%;
    margin: 10px 0 10px 20px;
    color: ${(props) => props.theme.colors.secondary};
  }
`;
export const LeftInput = styled.div`
  width: 50%;
`;
export const RightInput = styled.div`
  width: 50%;
`;

export const ResetButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  border-radius: 4px;
  padding: 3px;
  margin-left: 10px;
  font-weight: 500;
  :hover {
    background-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const RegistrationButton = styled.button`
  padding: 8px 12px;
  color: ${(props) => props.theme.colors.white};
  border: none;
  background-color: ${(props) => props.theme.colors.green};
  border-radius: 4px;
  left: 85%;
  font-weight: 500;
  :hover {
    opacity: 0.7;
  }
`;
