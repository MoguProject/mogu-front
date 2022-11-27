import { Logo } from '../../Header/styled';
import {
  FooterLeft,
  FooterStyled,
  FooterWrapper,
  FooterRight,
  FooterTitle,
  FooterSubTitle,
  FooterSection,
} from './styled';
const DesktopFooter = () => {
  return (
    <FooterWrapper>
      <FooterStyled>
        <FooterLeft>
          <Logo>Mogu</Logo>
          <p>© Mogu Co., Ltd. All rights reserved.</p>
        </FooterLeft>
        <FooterRight>
          <FooterSection>
            <FooterTitle>추천메뉴</FooterTitle>
            <FooterSubTitle>
              <li>프로젝트 모집</li>
              <li>스터디 모집</li>
              <li>커뮤니티</li>
            </FooterSubTitle>
          </FooterSection>
          <FooterSection>
            <FooterTitle>이용안내</FooterTitle>
            <FooterSubTitle>
              <li>서비스 이용안내</li>
              <li>공지사항</li>
            </FooterSubTitle>
          </FooterSection>
          <FooterSection>
            <FooterTitle>서비스 약관</FooterTitle>
            <FooterSubTitle>
              <li>서비스 이용약관</li>
              <li>개인정보 취급방침</li>
            </FooterSubTitle>
          </FooterSection>
        </FooterRight>
      </FooterStyled>
    </FooterWrapper>
  );
};

export default DesktopFooter;
