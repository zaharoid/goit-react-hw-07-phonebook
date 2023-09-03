import styled from '@emotion/styled';

export const List = styled.ul`
  /* width: 980px; */
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;

  /* margin: 35px auto; */
`;

export const TotalCount = styled.p`
  text-align: center;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  margin-left: auto;
  width: 75px;
  height: 25px;
  border: solid 2px #45cd24;
  border-radius: 10px;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  width: 980px;
  margin: 35px auto;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
