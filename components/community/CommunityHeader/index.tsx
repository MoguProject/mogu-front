import { ChangeEvent } from 'react';
import SearchInput from '../../common/input/SearchInput';
import SelectInput from '../../common/input/SelectInput';
import { CommunityWrapperInterface } from '../CommunityWrapper';
import { CommunityHeaderWrapper } from './styled';
import CommunityHeaderTop from './top';

const CommunityHeader = ({
  currentCategory,
  currentSort,
  setCurrentCategory,
  setCurrentSort,
}: CommunityWrapperInterface) => {
  const onChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'recent') {
      return setCurrentSort(e.target.value);
    }
    setCurrentSort('liked');
  };
  return (
    <CommunityHeaderWrapper>
      <CommunityHeaderTop
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <div>
        <SelectInput width="200px">
          <select
            name={'sort'}
            onChange={onChangeSort}
            defaultValue={currentSort}
          >
            <option value="recent">최신순</option>
            <option value="liked">좋아요순</option>
          </select>
        </SelectInput>
      </div>
    </CommunityHeaderWrapper>
  );
};

export default CommunityHeader;
