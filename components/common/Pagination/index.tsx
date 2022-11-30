import styled from 'styled-components';
import Prev from 'public/images/icon/chevron_prev.svg';
import Next from 'public/images/icon/chevron_next.svg';

const PrevIcon = styled(Prev)`
  width: 11px;

  path {
    fill: ${(props) => props.theme.colors.primary};
  }
`;

const NextIcon = styled(Next)`
  width: 11px;

  path {
    fill: ${(props) => props.theme.colors.primary};
  }
`;

const PaginationWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const PaginationBox = styled.div<{ active?: boolean }>`
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

const PaginationButtonBox = styled(PaginationBox)`
  border: 1px solid ${(props) => props.theme.colors.border};
  margin: 0 22px;
`;

const Pagination = () => {
  return (
    <PaginationWrapper>
      <PaginationButtonBox>
        <PrevIcon />
      </PaginationButtonBox>
      <PaginationBox active={true}>1</PaginationBox>
      <PaginationBox>2</PaginationBox>
      <PaginationBox>3</PaginationBox>
      <PaginationBox>4</PaginationBox>
      <PaginationBox>5</PaginationBox>
      <PaginationButtonBox>
        <NextIcon />
      </PaginationButtonBox>
    </PaginationWrapper>
  );
};

export default Pagination;