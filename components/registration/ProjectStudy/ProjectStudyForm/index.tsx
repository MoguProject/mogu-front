import SelectInput from 'components/common/input/SelectInput';
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import options from './options';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import CameraIcon from 'public/images/icon/camera.svg';
import { useForm, UseFormRegister } from 'react-hook-form';
import Image from 'next/image';

const ProjectStudyFormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-content: center;
`;

const ProjectStudyFormContent = styled.div`
  padding: 16px 8px;
`;

const ProjectStudyFormTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 16px;
`;

const ProjectStudyFormInput = styled.input`
  width: 100%;
  height: 42px;
  padding: 4px 14px;
  border: 1px solid ${(props) => props.theme.colors.border};
  font-size: 14px;
  border-radius: 4px;

  :focus {
    outline: 1px solid ${(props) => props.theme.colors.green};
  }
`;

const MainImagePreview = styled.div`
  width: 350px;
  height: 250px;
  background-color: ${(props) => props.theme.colors.border};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    margin-top: 8px;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const MainImageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin: 36px 0;
`;

const MainImageSelectButton = styled.label`
  padding: 12px 8px;
  background-color: ${(props) => props.theme.colors.green};
  color: white;
  font-size: 14px;
  border-radius: 4px;
  margin-left: 36px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

interface ProjectStudyFormProps {
  register: UseFormRegister<any>;
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  skillsValue: { content: string; id: string }[];
  setSkillsValue: Dispatch<SetStateAction<{ content: string; id: string }[]>>;
  contactInfo: string;
  setContactInfo: Dispatch<SetStateAction<string>>;
  mainImage: null | File;
  setMainImage: Dispatch<SetStateAction<File>>;
}

const ProjectStudyForm = ({
  register,
  date,
  setDate,
  skillsValue,
  setSkillsValue,
  contactInfo,
  setContactInfo,
  mainImage,
  setMainImage,
}: ProjectStudyFormProps) => {
  const [mainImageUrl, setMainImageUrl] = useState('');
  const onChangeContactInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactInfo(e.target.value);
  };

  const onChangeSkills = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedContent = options.skills.filter(
      (v) => v.value === e.target.value,
    );
    const content = selectedContent[0].content;
    setSkillsValue((prev) => {
      return [
        ...prev,
        {
          id: e.target.value,
          content,
        },
      ];
    });
  };

  const onChangeMainImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    return new Promise((resolve) => {
      reader.onload = () => {
        const url = reader.result.toString();
        setMainImageUrl(url);
      };
    });
  };

  return (
    <ProjectStudyFormWrapper>
      <ProjectStudyFormContent>
        <ProjectStudyFormTitle>?????? ??????</ProjectStudyFormTitle>
        <SelectInput width="100%">
          <select
            {...register('categoryId', {
              required: true,
            })}
          >
            {options.categoryId.map((option) => (
              <option key={option.value} value={option.value}>
                {option.content}
              </option>
            ))}
          </select>
        </SelectInput>
      </ProjectStudyFormContent>
      <ProjectStudyFormContent>
        <ProjectStudyFormTitle>???????????? ????????????</ProjectStudyFormTitle>
        <SelectInput width="100%">
          <select
            {...register('preferredMethod', {
              required: true,
            })}
          >
            {options.preferredMethod.map((option) => (
              <option key={option.value} value={option.value}>
                {option.content}
              </option>
            ))}
          </select>
        </SelectInput>
      </ProjectStudyFormContent>
      <ProjectStudyFormContent>
        <ProjectStudyFormTitle>??????</ProjectStudyFormTitle>
        <SelectInput width="100%">
          <select
            {...register('region', {
              required: true,
            })}
          >
            {options.region.map((option) => (
              <option key={option.value} value={option.value}>
                {option.content}
              </option>
            ))}
          </select>
        </SelectInput>
      </ProjectStudyFormContent>
      <ProjectStudyFormContent>
        <ProjectStudyFormTitle>????????????</ProjectStudyFormTitle>
        <SelectInput width="100%">
          <select
            {...register('period', {
              required: true,
            })}
          >
            {options.period.map((option) => (
              <option key={option.value} value={option.value}>
                {option.content}
              </option>
            ))}
          </select>
        </SelectInput>
      </ProjectStudyFormContent>
      <ProjectStudyFormContent>
        <ProjectStudyFormTitle>????????????</ProjectStudyFormTitle>
        <SelectInput width="100%">
          <select
            {...register('memberCount', {
              required: true,
            })}
          >
            {options.memberCount.map((option) => (
              <option key={option.value} value={option.value}>
                {option.content}
              </option>
            ))}
          </select>
        </SelectInput>
      </ProjectStudyFormContent>
      <ProjectStudyFormContent>
        <ProjectStudyFormTitle>?????? ??????</ProjectStudyFormTitle>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="yyyy-MM-dd"
          locale={ko}
          customInput={<ProjectStudyFormInput />}
          showPopperArrow={false}
          minDate={new Date()}
        />
      </ProjectStudyFormContent>
      <ProjectStudyFormContent>
        <ProjectStudyFormTitle>???????????? ????????????</ProjectStudyFormTitle>
        <SelectInput width="100%">
          <select
            {...register('contactMethod', {
              required: true,
            })}
          >
            {options.contactMethod.map((option) => (
              <option key={option.value} value={option.value}>
                {option.content}
              </option>
            ))}
          </select>
        </SelectInput>
        <ProjectStudyFormInput
          placeholder="??????????????? ????????? ???????????????."
          style={{ marginTop: '8px' }}
          value={contactInfo}
          onChange={onChangeContactInfo}
        />
      </ProjectStudyFormContent>
      <ProjectStudyFormContent>
        <ProjectStudyFormTitle>????????????</ProjectStudyFormTitle>
        <SelectInput width="100%">
          <select onChange={onChangeSkills}>
            {options.skills.map((option) => (
              <option key={option.value} value={option.value}>
                {option.content}
              </option>
            ))}
          </select>
        </SelectInput>
        <ProjectStudyFormInput
          readOnly
          style={{ marginTop: '8px' }}
          value={skillsValue.map((v) => v.content)}
        />
      </ProjectStudyFormContent>
      <MainImageWrapper>
        <MainImagePreview>
          {mainImageUrl !== '' ? (
            <Image
              src={mainImageUrl}
              width={350}
              height={250}
              alt={'main-image-preview'}
              style={{ borderRadius: '4px' }}
            />
          ) : (
            <>
              <CameraIcon width={24} height={24} />
              <span>?????? ???????????? ????????? ?????????.</span>
            </>
          )}
        </MainImagePreview>
        <MainImageSelectButton htmlFor="mainImageInput">
          ????????? ??????
        </MainImageSelectButton>
        <input
          id={'mainImageInput'}
          type="file"
          accept="image/*"
          onChange={onChangeMainImage}
          style={{ display: 'none' }}
        />
      </MainImageWrapper>
    </ProjectStudyFormWrapper>
  );
};

export default ProjectStudyForm;
