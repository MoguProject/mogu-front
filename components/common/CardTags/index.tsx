import { CardTagsWrapper, CardTagsText } from './styled';

const CardTags = ({ tag }: { tag: string }) => {
  return (
    <CardTagsWrapper>
      <CardTagsText>#{tag}</CardTagsText>
    </CardTagsWrapper>
  );
};

export default CardTags;
