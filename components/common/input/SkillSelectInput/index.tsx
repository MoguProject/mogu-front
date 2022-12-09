import Image from 'next/image';
import {
  ChangeEvent,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { onEditProfileState } from 'recoil/atom';
import styled from 'styled-components';
import closeButton from '../../../../public/images/icon/close.svg';
import SelectInput from '../SelectInput';

const SkillSelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const SkillSelectTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  margin-bottom: 8px;
`;

const SkillSelectInputBox = styled.div<{ readOnly: boolean }>`
  height: 36px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.readOnly ? props.theme.colors.border : 'white'};
`;

const SkillWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 4px 8px;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondary};
  position: relative;
  margin-left: 8px;
`;

const DeleteButton = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: 2px;
  margin-left: 4px;
`;

const SkillSelectInputStyled = styled.div`
  margin: 8px 0;
`;

interface SkillSelectInputProps {
  skills: string[];
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
}

const SkillSelectInput = ({
  skills,
  register,
  setValue,
}: SkillSelectInputProps) => {
  const skillList = [
    'React',
    'Vue',
    'NextJs',
    'JavaScript',
    'TypeScript',
    'Svelte',
    'Java',
    'Spring',
    'NodeJs',
    'NestJs',
    'Go',
    'Kotlin',
    'Express',
    'MySQL',
    'MongoDB',
    'Python',
    'Django',
    'php',
    'GraphQL',
    'Firebase',
    'Flutter',
    'Swift',
    'ReactNative',
    'AWS',
    'Kubernetes',
    'Docker',
    'Git',
    'Figma',
    'Zeplin',
    'Jest',
    'C',
  ];
  const [onEdit, setOnEdit] = useRecoilState(onEditProfileState);

  const [skillState, setSkillState] = useState(skills);
  const onChangeSkill = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setSkillState((prev) => [...prev, e.target.value]);
    },
    [skillState],
  );

  const onClickDeleteButton = useCallback((e: any) => {
    const innerSkill = e.currentTarget.parentNode.innerText;
    setSkillState((prev) => prev.filter((v) => v !== innerSkill));
  }, []);

  useEffect(() => {
    setValue('skills', skillState);
  }, [skillState]);
  return (
    <SkillSelectInputWrapper>
      <SkillSelectTitle>기술 스택</SkillSelectTitle>
      <SkillSelectInputBox readOnly={!onEdit}>
        {skillState.map((skill) => (
          <SkillWrapper key={skill}>
            {skill}
            <DeleteButton onClick={onClickDeleteButton}>
              <Image
                src={closeButton}
                alt={'삭제버튼'}
                width={12}
                height={12}
              />
            </DeleteButton>
          </SkillWrapper>
        ))}
      </SkillSelectInputBox>
      <SkillSelectInputStyled>
        <SelectInput width={'100%'} readOnly={!onEdit}>
          <select onChange={onChangeSkill}>
            {skillList.map((skill) => (
              <option value={skill} key={skill}>
                {skill}
              </option>
            ))}
          </select>
        </SelectInput>
      </SkillSelectInputStyled>
    </SkillSelectInputWrapper>
  );
};

export default SkillSelectInput;
