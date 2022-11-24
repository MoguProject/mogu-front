import styled from 'styled-components';
import Image from 'next/image';
import { ReactNode, useState } from 'react';

import {
  CardCarouselContent,
  CardCarouselWrapper,
  CarouselStyled,
  CardCarouselNextButton,
  CardCarouselNextButtonWrapper,
  CardCarouselPrevButton,
  CardCarouselPrevButtonWrapper,
  CardCarouselContentWrapper,
} from './styled';

const CardCarousel = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const onClickNextButton = () => {
    if (currentPage > 1) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };

  const onClickPrevButton = () => {
    if (currentPage < 1) {
      return;
    }
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <CardCarouselWrapper>
      <CarouselStyled>
        <CardCarouselPrevButtonWrapper>
          <CardCarouselPrevButton onClick={onClickPrevButton}>
            <Image
              src={'/images/icon/chevron_prev.svg'}
              alt={'prev button'}
              width={12}
              height={20}
            />
          </CardCarouselPrevButton>
        </CardCarouselPrevButtonWrapper>
        <CardCarouselContentWrapper>
          <CardCarouselContent currentPage={currentPage}>
            {children}
          </CardCarouselContent>
        </CardCarouselContentWrapper>
        <CardCarouselNextButtonWrapper>
          <CardCarouselNextButton onClick={onClickNextButton}>
            <Image
              src={'/images/icon/chevron_next.svg'}
              alt={'next button'}
              width={12}
              height={20}
            />
          </CardCarouselNextButton>
        </CardCarouselNextButtonWrapper>
      </CarouselStyled>
    </CardCarouselWrapper>
  );
};

export default CardCarousel;
