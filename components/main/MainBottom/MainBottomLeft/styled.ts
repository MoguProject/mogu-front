import styled from 'styled-components';

export const MainBottomLeftWrapper = styled.div`
  width: 55%;
  padding: 36px 0;
`;

export const MainBottomLeftTitle = styled.h1`
  font-size: 19px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 36px;
`;

export const MainBottomLeftHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
`;

export const MainBottomLeftSelect = styled.ul`
  display: flex;

  li {
    padding: 10px;
    cursor: pointer;
    :first-child {
      border-bottom: 1px solid ${(props) => props.theme.colors.red};
    }
  } // 셀렉트 하는 기능 추가 필요
`;

export const MainBottomLeftMoreButtom = styled.span`
  // Link태그 사용
  font-size: 14px;
  letter-spacing: 0.25px;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  padding: 0 18px;
  // 링크기능 추가
`;
