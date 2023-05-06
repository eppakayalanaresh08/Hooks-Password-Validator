import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  min-height: 100vh;
`

export const PasswordValidatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383a4e;
  border-radius: 12px;
  width: 64%;
  height: 33vh;
  min-width: 325px;
  box-shadow: 0px 1px 1px #434451;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 42vh;
    min-width: 520px;
    max-width: 600px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`
export const Text = styled.p`
  color: #f8fafc;
  text-align: center;
  font-family: 'Roboto';
  font-size: 16px;
  width: 80%;
  margin-top: 12px;
  margin-bottom: 16px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 28px;
  }
`

export const PasswordInput = styled.input`
  color: #475569;
  background-color: #edeeff;
  font-size: 14px;
  height: 43px;
  border: 1px solid #24263c;
  border-radius: 2px;
  margin-top: 16px;
  padding: 8px 16px;
  min-width: 280px;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    height: 47px;
    margin-top: 28px;
    min-width: 383px;
  }
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 12px;
  margin-top: 8px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

// import styled from 'styled-components'

// export const Container = styled.div`
//   background-color: #24263c;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `

// export const CardContainer = styled.div`
//   background-color: #434451;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 30px;
//   border-radius: 10px;
//   height: 35vh;
// `

// export const Header = styled.h1`
//   color: #ffffff;
//   font-family: 'Roboto';
// `

// export const Description = styled.p`
//   color: #edeeff;
//   font-family: 'Roboto';
//   font-size: 13px;
// `

// export const InputElement = styled.input`
//   width: 300px;
//   height: 35px;
// `

// export const ErrorMsg = styled.p`
//   color: #ef4444;
//   font-family: 'Roboto';
// `
