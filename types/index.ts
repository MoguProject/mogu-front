export interface LoginSubmitData {
  email: string;
  password: string;
}

export interface SignupSubmitData {
  email: string;
  password: string;
  nickname: string;
  name: string;
  phone: string;
  password_check?: string;
  phone_number?: number;
}

export interface UserLoginReturnData {
  nickname: string;
  profileImageUrl: string;
  token: string;
}

export interface MyPageEditSubmitData {
  information: string;
  isActivated: string | boolean;
  nickname: string;
  phone: string;
  preferredMethod: string;
  region: string;
  skills: string[];
}

export interface CommunityContentInterface {
  categoryId: number;
  categoryName: string;
  content: string;
  createdAt: string;
  likeCount: number;
  likeStatus: boolean;
  title: string;
  id?: number;
  updatedAt: string;
  userId: number;
  userNickname: string;
  view: number;
  replyList: ReplyListType[];
  postId: number;
}

export interface ProjectStudyContentInterface
  extends CommunityContentInterface {
  contactInfo: string;
  contactMethod: string;
  mainImage: string;
  memberCount: number;
  openStatus: boolean;
  period: string;
  postSkills: { id: number; skillName: string }[];
  preferredMethod: string;
  region: string;
  startAt: string;
  postId: number;
}

export interface PostsDataInterface {
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    sort: SortInterface;
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  size: number;
  sort: SortInterface;
  totalElements: number;
  totalPages: number;
}

export interface SortInterface {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface CommunityDataInterface extends PostsDataInterface {
  content: CommunityContentInterface[];
}

export interface ProjectStudyDataInterface extends PostsDataInterface {
  content: ProjectStudyContentInterface[];
}

export interface ReplyListType {
  id: number;
  userId: number;
  content: string;
  targetNickname: string;
  deleteStatus: boolean;
  createAt: string;
  updateAt: string;
  children: ReplyListType[];
  userNickname: string;
}
