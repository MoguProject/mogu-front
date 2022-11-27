import Image from 'next/image';
import { Logo } from '../../Header/styled';
import { FooterWrapper } from './styed';

const MobileFooter = () => {
  return (
    <FooterWrapper>
      <Logo>MoGu</Logo>
      <ul>
        <li>
          <span>추천메뉴</span>
          <Image
            src={'/images/icon/chevron-right.svg'}
            alt={'V형 무늬'}
            width={16}
            height={16}
          />
        </li>
        <li>
          <span>이용안내</span>
          <Image
            src={'/images/icon/chevron-right.svg'}
            alt={'V형 무늬'}
            width={16}
            height={16}
          />
        </li>
        <li>
          <span>서비스 약관</span>
          <Image
            src={'/images/icon/chevron-right.svg'}
            alt={'V형 무늬'}
            width={16}
            height={16}
          />
        </li>
      </ul>
      <p>© Mogu Co., Ltd. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default MobileFooter;
