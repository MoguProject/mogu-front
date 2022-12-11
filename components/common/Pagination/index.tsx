import { Dispatch, SetStateAction, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { getProjectStudyPostsApi } from 'utils/apis/posts';
import {
  PaginationBox,
  PaginationButtonBox,
  PaginationWrapper,
  PrevIcon,
  NextIcon,
} from './styled';

interface PagenationProps {
  currentPage: number | undefined;
  totalPage: number | undefined;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  first: boolean;
  last: boolean;
}

const Pagination = ({
  currentPage,
  totalPage,
  setCurrentPage,
  first,
  last,
}: PagenationProps) => {
  const createPaginationBox = () => {
    const arr = [];
    for (let i = 1; i <= totalPage; i++) {
      arr.push(
        <PaginationBox
          onClick={() => setCurrentPage(i - 1)}
          active={currentPage + 1 === i}
        >
          {i}
        </PaginationBox>,
      );
    }
    return arr;
  };

  return (
    <PaginationWrapper>
      <PaginationButtonBox
        onClick={first ? null : () => setCurrentPage(currentPage - 1)}
        disabled={first}
      >
        {'<'}
      </PaginationButtonBox>
      {createPaginationBox()}
      <PaginationButtonBox
        onClick={last ? null : () => setCurrentPage(currentPage + 1)}
        disabled={last}
      >
        {'>'}
      </PaginationButtonBox>
    </PaginationWrapper>
  );
};

export default Pagination;
