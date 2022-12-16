import { ChangeEvent, useCallback, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { projectStudyQuillValue } from 'recoil/atom';
import styled from 'styled-components';
import ReactQuillEditor from './Editor';

const RegistrationWrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 36px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const TitleInputWrapper = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.primary};
  border-radius: 4px;

  :focus {
    outline: 1px solid ${(props) => props.theme.colors.green};
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.tertiary};
  }
`;

const Registration = ({ register }: { register?: UseFormRegister<any> }) => {
  const [value, setValue] = useRecoilState(projectStudyQuillValue);
  return (
    <RegistrationWrapper>
      <TitleInputWrapper
        placeholder="게시글 제목을 입력해 주세요."
        {...register('title', {
          required: true,
        })}
      />
      <ReactQuillEditor value={value} setValue={setValue} />
    </RegistrationWrapper>
  );
};

export default Registration;
