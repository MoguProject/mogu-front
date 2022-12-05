import { MyPageData } from 'pages/mypage';
import MyPageEditWrapper from './MyPageEditWrapper';
import { MyPageWrapper } from '../styled';
import MyPageAboutWrapper from './MyPageAboutWrapper';
import MyPagePasswordWrapper from './MyPagePasswordWrapper';
import { useForm } from 'react-hook-form';
import MyPageRadioWrapper from './MyPageRadioWrapper';

const MyPageEditProfile = ({ data }: { data: MyPageData }) => {
  const { register, handleSubmit, setFocus } = useForm({
    defaultValues: {
      preferredMethod: data.preferredMethod,
      isActivated: data.activated ? 'true' : 'false',
      information: data.information,
    },
  });
  return (
    <MyPageWrapper>
      <MyPageEditWrapper
        label={'닉네임'}
        id={'mypage_nickname'}
        value={data.nickname}
        register={register}
        onSubmit={handleSubmit}
        setFocus={setFocus}
      />
      <MyPageEditWrapper
        label={'핸드폰 번호'}
        id={'mypage_phone'}
        value={data.phone}
        register={register}
        onSubmit={handleSubmit}
        setFocus={setFocus}
      />
      <MyPagePasswordWrapper />
      <MyPageRadioWrapper
        title={'선호하는 진행방식'}
        radioValue={{ first: 'online', second: 'offline' }}
        radioName={'preferredMethod'}
        radioLabel={{ first: '온라인', second: '오프라인' }}
        register={register}
        onSubmit={handleSubmit}
      />
      <MyPageRadioWrapper
        title={'프로필 공개여부'}
        radioValue={{ first: 'true', second: 'false' }}
        radioName={'isActivated'}
        radioLabel={{ first: '공개', second: '비공개' }}
        register={register}
        onSubmit={handleSubmit}
      />
      <MyPageAboutWrapper
        information={data.information}
        register={register}
        onSubmit={handleSubmit}
        setFocus={setFocus}
      />
    </MyPageWrapper>
  );
};

export default MyPageEditProfile;
