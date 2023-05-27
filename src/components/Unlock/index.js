// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  InnerContainer,
  Image,
  Para,
  ButtonContainer,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [deviceUnlocked, setDeviceUnlocked] = useState(false)

  const onClickButton = () => {
    setDeviceUnlocked(prevState => !prevState)
  }

  return (
    <AppContainer>
      {deviceUnlocked ? (
        <InnerContainer>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <Para>Your Device is Unlocked</Para>
          <ButtonContainer>
            <Button type="button" onClick={onClickButton}>
              Lock
            </Button>
          </ButtonContainer>
        </InnerContainer>
      ) : (
        <InnerContainer>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <Para>Your Device is Locked</Para>
          <ButtonContainer>
            <Button type="button" onClick={onClickButton}>
              Unlock
            </Button>
          </ButtonContainer>
        </InnerContainer>
      )}
    </AppContainer>
  )
}

export default Unlock
