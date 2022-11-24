import styled from 'styled-components';

export const CardCarouselWrapper = styled.div`
  margin: 0 auto;
  width: 1140px;
  height: auto;
  padding: 0 10px;
`;

export const CarouselStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
`;

export const CardCarouselPrevButtonWrapper = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.2s ease-in-out;
  z-index: 3333;
`;

export const CardCarouselPrevButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #ffffff;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.border};
  }
`;

export const CardCarouselNextButtonWrapper = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.2s ease-in-out;
  z-index: 3333;
`;

export const CardCarouselNextButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #ffffff;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.border};
  }
`;

export const CardCarouselContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 40px;
  overflow: hidden;
`;

export const CardCarouselContent = styled.div<{ currentPage: number }>`
  width: calc(200%);
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  transition: all 0.5s ease-in-out;
  transform: ${(props) => `translateX(${props.currentPage * -25}%)`};
  overflow: hidden;
`;
