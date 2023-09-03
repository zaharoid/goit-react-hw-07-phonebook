import styled from '@emotion/styled';
import { ReactComponent as CloseIcn } from '../../icons/close.svg';

export const CloseIcon = styled(CloseIcn)`
  width: 12px;
  height: 12px;
  transition: all 250ms linear;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(138, 165, 249, 1);
  width: 100%;
  height: 100%;
`;
export const Window = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 350px;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-radius: 15px;
  animation-name: grow-box;
  animation-duration: 250ms;
  animation-timing-function: linear;

  @keyframes grow-box {
    0% {
      opacity: 0.2;
      transform: scale(0.1), translate(-50%, -50%);
    }
    50% {
      opacity: 0.6;
      transform: scale(0.9), translate(-50%, -50%);
    }

    100% {
      opacity: 1;
      transform: scale(1.5), translate(-50%, -50%);
    }
  }
`;

export const ModalTitle = styled.h2`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

export const CloseModalBtn = styled.button`
  position: absolute;
  display: flex;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
  top: 24px;
  right: 24px;
  border-radius: 50%;
  border: 2px solid #000;
  background-color: #fff;
  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    border-color: transparent;
    background-color: #20aee3;
  }
`;
