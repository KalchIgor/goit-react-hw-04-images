import styled from 'styled-components';

export const Spinner = styled.div`
 /* width: 80px;
  margin: 30px auto;
  color: #3f51b5;*/

   position: fixed;
  top: 0;
  left: 0;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(185, 228, 201, 0.2)
`;

/*
export const LoaderBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(185, 228, 201, 0.2);
`;

export const PendingLion = styled.img`
  position: absolute;
  top: 35%;
  left: 45%;
  margin: 0 auto;
  width: 70vp;
  height: auto;
  object-fit: contain;
  object-position: center;
`;
*/

