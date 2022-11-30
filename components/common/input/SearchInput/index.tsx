import Image from 'next/image';
import {
  SearchIconWrapper,
  SearchInputStyled,
  SearchInputWrapper,
} from './styled';

const SearchInput = () => {
  return (
    <SearchInputWrapper>
      <SearchIconWrapper>
        <Image
          src={'/images/icon/search.svg'}
          alt={'검색'}
          width={17}
          height={17}
        />
      </SearchIconWrapper>
      <SearchInputStyled type="text" placeholder="검색 ( 제목 / 내용 )" />
    </SearchInputWrapper>
  );
};

export default SearchInput;
