import React, { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import PostEditor from './PostEditor';
import {
  FirstSection,
  LeftInput,
  RegistrationButton,
  RegistrationForm,
  RegistrationWrapper,
  RightInput,
  ResetButton,
} from './styled';
import axios from 'axios';

interface IFormInput {
  memberCount: number;
  openStatus: string | boolean;
  period: string;
  preferredMethod: string;
  region: string;
  startAt: string;
  skill: string[];
  content: string;
}

const Registration = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    {
      data.skill = [...selected];
    }
    {
      data.openStatus === 'true'
        ? (data.openStatus = true)
        : (data.openStatus = false);
    }
    // axios
    //   .post('http://13.124.27.209:8080/projectstudy/create', data, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error.data);
    //   });
  };
  const [content, setContent] = useState<string | undefined>(
    '프로젝트에 대해 소개해주세요!',
  );

  const [selected, setSelected] = useState<string[]>([]);
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected([...selected, e.target.value]);
  };

  // 기술 스택 초기화
  const resetSelect = () => {
    setSelected([]);
  };

  const countList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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
    'Kotlin',
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
  return (
    <RegistrationWrapper>
      <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
        <p>1. 프로젝트 기본 정보를 입력해주세요. </p>
        <FirstSection>
          <LeftInput>
            <div>
              <label>모집 구분</label>
              <select {...register('preferredMethod')}>
                <option value="projects">프로젝트</option>
                <option value="study">스터디</option>
              </select>
            </div>
            <div>
              <label>진행 방식</label>
              <select {...register('region')}>
                <option value="온라인">온라인</option>
                <option value="오프라인">오프라인</option>
              </select>
            </div>
            <div>
              <label>기술 스택 </label>
              <ResetButton onClick={resetSelect}>초기화</ResetButton>
              <input
                type="text"
                value={selected}
                {...register('skill')}
                placeholder="프로젝트 사용 스택"
              />
              <select onChange={handleSelect}>
                {skillList.map((item) => (
                  <option value={item.toUpperCase()}>{item}</option>
                ))}
              </select>
            </div>
            <div>
              <label>모집 현황</label>
              <select {...register('openStatus')}>
                <option value="true">모집중</option>
                <option value="false">모집완료</option>
              </select>
            </div>
          </LeftInput>
          <RightInput>
            <div>
              <label>모집 인원</label>
              <select {...register('memberCount')}>
                {countList.map((item) => (
                  <option value={item}>
                    {item === 0 ? '인원미정' : `${item}명`}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>진행 기간</label>
              <select {...register('period')}>
                {countList.map((data) => (
                  <option value={data.toString()}>
                    {data === 0 ? '기간 미정' : `${data}개월`}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>시작 예정일</label>
              <input type="date" {...register('startAt')} />
            </div>
          </RightInput>
        </FirstSection>
        <section>
          <p>2.프로젝트에 대해 소개해주세요.</p>
          {/* <PostEditor value={content} onChange={setContent} /> */}
        </section>
        <RegistrationButton>등록하기</RegistrationButton>
      </RegistrationForm>
    </RegistrationWrapper>
  );
};

export default Registration;
