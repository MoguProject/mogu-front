import styled from 'styled-components';
import Image from 'next/image';

export const CommunityPostWrapper = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: space-between;
  position: relative;
  border-bottom: 2px solid ${(props) => props.theme.colors.border};
`;

export const CommunityPostLeft = styled.div``;

export const CommunityPostRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const CommunityPostHeader = styled.p`
  font-size: 12px;
  letter-spacing: 0.25px;
  color: ${(props) => props.theme.colors.green};
  padding: 10px;
`;

export const CommunityPostTitle = styled.h2`
  font-size: 19px;
  font-weight: 700;
  padding: 5px 10px;
  color: ${(props) => props.theme.colors.primary};
`;

export const CommunityPostSummary = styled.div`
  font-size: 14px;
  letter-spacing: 0.25px;
  padding: 10px 10px 0 10px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.secondary};
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical; // 3줄 이상 넘을시 ...표시
`;

export const CommunityPostIconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  font-size: 14px;
  letter-spacing: 0.25px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const CommunityPostIcon = styled(Image)`
  margin: 0 5px;
`;

export const CommunityPostFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;
`;
