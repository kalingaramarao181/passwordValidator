import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.main ? '#24263c' : '#475569')};
  border-radius: ${props => (props.main ? '0px' : '10px')};
  height: ${props => props.main && '100vh'};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => (props.main ? '0px' : '10px')};
`

export const Heading = styled.h1`
  color: white;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 0px;
`

export const Description = styled.p`
  color: ${props => (props.error ? '#ef4444' : '#ffffff')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
`
export const PasswordInput = styled.input`
  height: 40px;
  width: 300px;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 0px;
  margin-top: 20px;
`
