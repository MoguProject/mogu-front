import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const authModalState = atom<boolean>({
  key: 'authModal',
  default: true,
});

export const eamilCertState = atom<string>({
  key: 'emailCertificate',
  default: 'dasdasdbasjkdbkasjdbbasdvbdbkasjbjk', // random string
});

export const userCertValue = atom<string>({
  key: 'userCertificateValue',
  default: '',
});

export const myPageUserState = atom<any>({
  key: 'myPageUserState',
  default: {},
});

export const isLoggedInState = atom({
  key: 'isLoggedIn',
  default: {
    nickname: '',
    profileImageUrl: '',
  },
});
