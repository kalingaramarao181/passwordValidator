import {useState} from 'react'

import {
  Container,
  Heading,
  Description,
  PasswordInput,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onBlurPassword = event => {
    setPassword(event.target.value)
  }

  console.log(password)

  const errorText =
    password.length >= 8 ? '' : 'Your password must be at least 8 characters'

  return (
    <Container main>
      <Container>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <PasswordInput
          value={password}
          type="password"
          onChange={onBlurPassword}
        />
        <Description error>{errorText}</Description>
      </Container>
    </Container>
  )
}

export default PasswordValidator
