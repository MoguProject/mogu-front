import MainBottomLeft from './MainBottomLeft';
import MainBottomRight from './MainBottomRight';

import { MainBottomWrapper } from './styled';

const MainBottom = () => {
  return (
    <MainBottomWrapper>
      <MainBottomLeft />
      <MainBottomRight />
    </MainBottomWrapper>
  );
};

export default MainBottom;
