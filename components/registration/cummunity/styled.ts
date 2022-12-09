import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1140px;
  margin: 0 auto;
  padding: 40px 0;

  h1 {
    margin: 0 auto;
    font-weight: 700;
    font-size: 24px;
    color: ${(props) => props.theme.colors.dark};
  }
`;

export const PostRegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;

  select,
  input {
    font-size: 15px;
    padding: 10px;
  }
`;

export const ErrMessage = styled.p`
  color: ${(props) => props.theme.colors.red};
  font-size: 12px;
`;
