import {
  PaginationBox,
  PaginationButtonBox,
  PaginationWrapper,
  PrevIcon,
  NextIcon,
} from './styled';

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
