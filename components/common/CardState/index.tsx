import { CardStateWrapper, CardStateText } from './styled';

const CardState = ({ state }: { state: boolean }) => {
  return (
    <CardStateWrapper state={state}>
      <CardStateText>{state ? '모집중' : '모집완료'}</CardStateText>
    </CardStateWrapper>
  );
};

export default CardState;
