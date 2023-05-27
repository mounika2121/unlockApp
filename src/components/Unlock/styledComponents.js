// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
`
export const InnerContainer = styled.div`
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  height: 100px;
  width: 100px;
`
export const Para = styled.p`
  color: white;
  font-size: 20px;
  font-family: 'Roboto';
`
export const ButtonContainer = styled.div`
  margin-top: 75px;
`

export const Button = styled.button`
  background-color: #06b6d4;
  color: white;
  height: 40px;
  width: 100px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
`
