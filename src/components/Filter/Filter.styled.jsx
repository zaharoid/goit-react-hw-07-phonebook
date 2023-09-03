import styled from '@emotion/styled';
export const Label = styled.label`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  text-align: center;
  margin: 0 auto 20px;
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
    &::placeholder {
      color: #037fad;
    }
  }
  &::placeholder {
    font-weight: 600;
    color: #0a57e4;
    text-align: center;
  }
`;
