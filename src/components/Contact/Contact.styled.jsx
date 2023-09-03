import styled from '@emotion/styled';

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 5px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 270px;
  /* height: 50px; */
  padding: 5px;
  border: 2px solid #ffffff;
  border-radius: 5px;
  background-color: #dcead7;
  transition: all 250ms linear;

  &:hover {
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    border: 2px solid #20aee3;
    cursor: pointer;
  }
`;
