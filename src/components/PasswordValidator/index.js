import {useState} from 'react'

import {
  MainContainer,
  PasswordValidatorContainer,
  Heading,
  Text,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const showErrorMessage = password.length < 8

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <PasswordValidatorContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <PasswordInput
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        {showErrorMessage && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </PasswordValidatorContainer>
    </MainContainer>
  )
}

export default PasswordValidator

// import {useState} from 'react'

// import {
//   Container,
//   CardContainer,
//   Header,
//   Description,
//   InputElement,
//   ErrorMsg,
// } from './styledComponents'

// const PasswordValidator = () => {
//   const [userError, updateError] = useState('')
//   const onChangeElement = event => {
//     updateError(event.target.value)
//   }

//   const errorMsg =
//     userError.length <= 8 ? 'Your Password must be at least 8 characters' : ''

//   return (
//     <Container>
//       <CardContainer>
//         <Header>Password Validator</Header>
//         <Description>Check how strong and secure is your password</Description>
//         <InputElement
//           type="password"
//           onChange={onChangeElement}
//           value={userError}
//         />
//         <ErrorMsg>{errorMsg}</ErrorMsg>
//       </CardContainer>
//     </Container>
//   )
// }

// export default PasswordValidator
