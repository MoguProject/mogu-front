import styled from 'styled-components';

export const ProjectsFilter = styled.form`
  width: 100%;
  height: 100%;
  max-width: 1140px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 10px;
  flex-wrap: wrap;

  select {
    margin-right: 10px;
    padding: 5px 80px 5px 5px;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 4px;
  }
`;
