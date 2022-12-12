import { Dispatch, SetStateAction, useEffect, useState } from 'react';
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
  const pageBlock = Math.ceil((currentPage + 1) / 10);
  const offset = (pageBlock - 1) * 10 + 1;
  console.log(currentPage);
  const onClickNextButton = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <PaginationWrapper>
      <PaginationButtonBox
        onClick={first ? null : () => setCurrentPage(currentPage - 1)}
        disabled={first}
      >
        {'<'}
      </PaginationButtonBox>
      {Array.from({ length: totalPage + 1 }, (v, i) => i)
        .slice(offset, offset + 10)
        .map((v, i) => (
          <PaginationBox
            onClick={() => setCurrentPage(v - 1)}
            active={currentPage === v - 1}
            key={v}
          >
            {v}
          </PaginationBox>
        ))}
      <PaginationButtonBox
        onClick={last ? null : onClickNextButton}
        disabled={last}
      >
        {'>'}
      </PaginationButtonBox>
    </PaginationWrapper>
  );
};

export default Pagination;
