import { MyPageData } from 'pages/mypage';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import { MyPageEditSubmitData } from 'types';
interface MyPageRadioWrapperProps {
  title: string;
  radioValue: {
    first: string | boolean;
    second: string | boolean;
  };
  radioLabel: {
    first: string;
    second: string;
  };
  radioName: string;
  register: UseFormRegister<any>;
  onSubmit: UseFormHandleSubmit<any>;
}

const MyPageRadioWrapperStyled = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const MyPageRadioTitle = styled.h3`
  margin: 1rem 0;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
`;

const MyPageRadioLabelStyled = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.secondary};
  margin-right: 8px;
`;

const MyPageRadioInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MyPageRadioSubmitButton = styled.button`
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  color: ${(props) => props.theme.colors.green};
`;

const MyPageRadioWrapper = ({
  title,
  radioValue,
  radioName,
  radioLabel,
  register,
  onSubmit,
}: MyPageRadioWrapperProps) => {
  const submitHandler = (data: MyPageEditSubmitData) => {
    const result = confirm(`${title} 변경하시겠습니끼?`);
    if (result) {
      if (data['isActivated'] === 'true') {
        data['isActivated'] = true;
      }
      if (data['isActivated'] === 'false') {
        data['isActivated'] = false;
      }
      console.log(data);
      return;
    } else {
      return;
    }
  };
  return (
    <MyPageRadioWrapperStyled onSubmit={onSubmit(submitHandler)}>
      <MyPageRadioTitle>{title}</MyPageRadioTitle>
      <MyPageRadioInputWrapper>
        <div>
          <MyPageRadioLabelStyled>
            <input
              type="radio"
              {...register(radioName)}
              value={radioValue.first}
            />
            {radioLabel.first}
          </MyPageRadioLabelStyled>
          <MyPageRadioLabelStyled>
            <input
              type="radio"
              {...register(radioName)}
              value={radioValue.second}
            />
            {radioLabel.second}
          </MyPageRadioLabelStyled>
        </div>
        <MyPageRadioSubmitButton type="submit">
          수정하기
        </MyPageRadioSubmitButton>
      </MyPageRadioInputWrapper>
    </MyPageRadioWrapperStyled>
  );
};

export default MyPageRadioWrapper;
