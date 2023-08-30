import styled from '@emotion/styled';
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 275px;
  border: solid 3px #45cd24;
  padding: 15px;
  border-radius: 5px;

  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 20px;

  text-align: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  background-image: linear-gradient(#20aee3, #20aee3),
    linear-gradient(#bfbfbf, #bfbfbf);
  border: 0 none;
  border-radius: 0;
  box-shadow: none;
  float: none;
  background-color: transparent;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  padding: 0;
  transition: background 0s ease-out 0s;
  color: #bfbfbf;
  min-height: 35px;
  display: initial;
  width: 100%;
  outline: none;
  font-size: 15px;
  &:focus {
    background-size: 100% 2px, 100% 1px;
    outline: 0 none;
    transition-duration: 0.3s;
    color: #525252;
  }
`;

export const Button = styled.button`
  padding: 7px;
  border: solid 2px #45cd24;
  border-radius: 10px;
  cursor: pointer;
`;
