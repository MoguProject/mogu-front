import styled from 'styled-components';
import Prev from 'public/images/icon/chevron_prev.svg';
import Next from 'public/images/icon/chevron_next.svg';

export const PrevIcon = styled('div')`
  /* width: 11px;
  path {
    fill: ${(props) => props.theme.colors.primary};
  } */
`;

export const NextIcon = styled('div')`
  width: 11px;

  path {
    fill: ${(props) => props.theme.colors.primary};
  }
`;

export const PaginationWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export const PaginationBox = styled.div<{ active?: boolean }>`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -1%;
  line-height: 24px;
  color: ${(props) =>
    props.active ? props.theme.colors.white : props.theme.colors.primary};
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in-out;
  background-color: ${(props) =>
    props.active ? props.theme.colors.green : '#FFFFFF'};

  :hover {
    opacity: 70%;
    background-color: ${(props) => props.theme.colors.border};
  }
`;

export const PaginationButtonBox = styled(PaginationBox)<{ disabled: boolean }>`
  border: 1px solid ${(props) => props.theme.colors.border};
  margin: 0 22px;
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.border : null};

  :hover {
    opacity: ${(props) => (props.disabled ? `100%` : null)};
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')}
  }
`;
