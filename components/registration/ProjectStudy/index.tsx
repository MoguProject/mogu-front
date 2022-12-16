import { axiosInstance } from 'axiosInstance';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { projectStudyQuillValue } from 'recoil/atom';
import styled from 'styled-components';
import Registration from '..';
import ProjectStudyForm from './ProjectStudyForm';

const ProjectStudyWrapper = styled.form`
  max-width: 1140px;
  margin: 0 auto;
  padding: 36px 10px;
`;

const SubmitButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  padding: 12px 8px;
  font-size: 14px;
  background-color: ${(props) => props.theme.colors.green};
  color: white;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;

  :hover {
    opacity: 0.7;
  }
`;

const ProjectStudy = () => {
  const { register, handleSubmit } = useForm();
  const [date, setDate] = useState(new Date());
  const [skillsValue, setSkillsValue] = useState([]);
  const [contactInfo, setContactInfo] = useState('');
  const [content, setContent] = useRecoilState(projectStudyQuillValue);
  const [mainImage, setMainImage] = useState<null | File>(null);

  return (
    <>
      <ProjectStudyWrapper
        onSubmit={handleSubmit(async (data) => {
          const formData = new FormData();

          const postDtoData = {
            categoryId: data.categoryId,
            title: data.title,
            content,
          };

          const projectStudyDtoData = {
            contactMethod: data.contactMethod,
            contactInfo,
            memberCount: data.memberCount,
            openStatus: true,
            period: data.period,
            preferredMethod: data.preferredMethod,
            region: data.region,
            skills: skillsValue,
            startAt: date,
          };

          const postBlob = new Blob([JSON.stringify(postDtoData)], {
            type: 'application/json',
          });
          const projectStudyBlob = new Blob(
            [JSON.stringify(projectStudyDtoData)],
            { type: 'application/json' },
          );
          formData.append('postDto', postBlob);
          formData.append('projectStudyDto', projectStudyBlob);

          if (mainImage) {
            formData.append('multipartFile', mainImage);
          }

          try {
            await axiosInstance.post('/projectstudy/create', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
          } catch (err) {
            console.error(err);
          }
        })}
      >
        <ProjectStudyForm
          register={register}
          date={date}
          setDate={setDate}
          skillsValue={skillsValue}
          setSkillsValue={setSkillsValue}
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
          mainImage={mainImage}
          setMainImage={setMainImage}
        />
        <Registration register={register} />
        <SubmitButtonWrapper>
          <SubmitButton type="submit">게시물 등록</SubmitButton>
        </SubmitButtonWrapper>
      </ProjectStudyWrapper>
    </>
  );
};

export default ProjectStudy;
