import { MyPageData } from 'pages/mypage';
import MyPageEditWrapper from './MyPageEditWrapper';
import { MyPageWrapper } from '../styled';
import MyPageAboutWrapper from './MyPageAboutWrapper';
import MyPagePasswordWrapper from './MyPagePasswordWrapper';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { onEditProfileState } from 'recoil/atom';
import MyPageSelectWrapper from './MyPageSelectWrapper';
import SkillSelectInput from 'components/common/input/SkillSelectInput';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import axios from 'axios';
import { updateMyPageUserDataAp } from 'utils/apis/user';
import { axiosInstance } from 'axiosInstance';

const MyPageEditButtonWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px;
`;

const MyPageEditButton = styled.button<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? props.theme.colors.red : props.theme.colors.green};
  padding: 8px 12px;
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  border-radius: 4px;
`;

const MypageDeleteButtonWrapper = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 0;

  button {
    background-color: ${(props) => props.theme.colors.red};
    padding: 8px 16px;
    color: ${(props) => props.theme.colors.white};
    border: 4px;
    font-weight: 400;
    border-radius: 4px;
  }
`;

const MyPageEditProfile = ({ data }: { data: MyPageData }) => {
  const [onEdit, setOnEdit] = useRecoilState(onEditProfileState);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      preferredMethod: data.preferredMethod,
      isActivated: data.activated,
      information: data.information,
      region: data.region,
      skills: data.skills,
    },
  });

  const preferredMethodOptions = [
    { value: 'NOTENTERED', content: '선태되지 않음' },
    { value: 'ONLINE', content: '온라인' },
    { value: 'OFFLINE', content: '오프라인' },
  ];

  const regionOptions = [
    { value: 'NOTENTERED', content: '선택되지 않음' },
    { value: '서울특별시', content: '서울특별시' },
    { value: '경기도', content: '경기도' },
    { value: '강원도', content: '강원도' },
    { value: '충청북도', content: '충청북도' },
    { value: '전라북도', content: '전라북도' },
    { value: '전라남도', content: '전라남도' },
    { value: '경상북도', content: '경상북도' },
    { value: '경상남도', content: '경상남도' },
    { value: '부산광역시', content: '부산광역시' },
  ];

  const isActivatedOptions = [
    { value: 'true', content: '공개' },
    { value: 'false', content: '비공개' },
  ];

  const mypageUpdateMutation = useMutation(updateMyPageUserDataAp);

  const onClickEditButton = () => {
    setOnEdit(true);
  };

  const onClickDeleteButton = () => {
    const res = axiosInstance.delete('/user/delete').then((res) => res.data);
    console.log(res);
  };

  return (
    <MyPageWrapper
      onSubmit={handleSubmit((data) => {
        if (!onEdit) {
          console.log('dasdas');
          setOnEdit(true);
          return;
        } else {
          const formData = new FormData();
          const requestDto = JSON.stringify(data);
          formData.append('profileImage', new Blob());
          formData.append(
            'requestDto',
            new Blob([requestDto], { type: 'application/json' }),
          );
          mypageUpdateMutation.mutate(formData);
        }
      })}
    >
      <MyPageEditButtonWrapper>
        <MyPageEditButton type={'submit'} active={onEdit}>
          {onEdit ? '내 정보 저장하기' : '내 정보 수정하기'}
        </MyPageEditButton>
      </MyPageEditButtonWrapper>
      <MyPageAboutWrapper information={data.information} register={register} />
      <MyPageEditWrapper
        label={'닉네임'}
        id={'nickname'}
        value={data.nickname}
        register={register}
      />
      <MyPageEditWrapper
        label={'핸드폰 번호'}
        id={'phone'}
        value={data.phone}
        register={register}
      />
      <MyPageSelectWrapper
        title={'선호하는 진행방식'}
        options={preferredMethodOptions}
        name={'preferredMethod'}
        register={register}
      />
      <MyPageSelectWrapper
        title={'선호하는 지역'}
        options={regionOptions}
        name={'region'}
        register={register}
      />
      <MyPageSelectWrapper
        title={'프로필 공개여부'}
        options={isActivatedOptions}
        name={'isActivated'}
        register={register}
      />
      <SkillSelectInput
        skills={data.skills}
        register={register}
        setValue={setValue}
      />
      <MyPagePasswordWrapper />
      <MypageDeleteButtonWrapper>
        <button type={'button'} onClick={onClickDeleteButton}>
          회원탈퇴
        </button>
      </MypageDeleteButtonWrapper>
    </MyPageWrapper>
  );
};

export default MyPageEditProfile;
