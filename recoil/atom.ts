import { atom } from 'recoil';

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

export const onEditProfileState = atom<boolean>({
  key: 'onEditProfileState',
  default: false,
});

export const projectStudyQuillValue = atom<string>({
  key: 'projectStudyQuillValue',
  default: '',
});
