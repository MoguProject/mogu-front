import styled from 'styled-components';

import SelectInput from 'components/common/input/SelectInput';
import { useRecoilState } from 'recoil';
import { onEditProfileState } from 'recoil/atom';
import { UseFormRegister } from 'react-hook-form';

const MyPageSelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const MyPageSelectInputTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
`;

const MyPageSelectInputStyled = styled.div`
  padding: 12px 0;
`;

interface MyPageSelectProps {
  title: string;
  options: { value: string; content: string }[];
  name: string;
  register: UseFormRegister<any>;
}

const MyPageSelectWrapper = ({
  title,
  options,
  name,
  register,
}: MyPageSelectProps) => {
  const [onEdit, setOnEdit] = useRecoilState(onEditProfileState);
  return (
    <MyPageSelectInputWrapper>
      <MyPageSelectInputTitle>{title}</MyPageSelectInputTitle>
      <MyPageSelectInputStyled>
        <SelectInput width={'100%'} readOnly={!onEdit}>
          <select disabled={!onEdit} {...register(name)}>
            {options.map((v) => (
              <option value={v.value} key={v.value}>
                {v.content}
              </option>
            ))}
          </select>
        </SelectInput>
      </MyPageSelectInputStyled>
    </MyPageSelectInputWrapper>
  );
};

export default MyPageSelectWrapper;
