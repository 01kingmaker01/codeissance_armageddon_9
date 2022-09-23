import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import logo from '../assets/images/twitter-icon.svg'
import googleIconImageSrc from '../assets/images/google-icon.png'
import LoginIcon from 'feather-icons/dist/icons/log-in.svg'
import Image from 'next/image'
import axios from 'axios'
import { useRouter } from 'next/router'

const Content = tw.div`w-full  bg-white text-gray-900 shadow sm:rounded-lg flex justify-center `
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`
const LogoLink = tw.a``
const MainContent = tw.div`mt-12 flex flex-col items-center`
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`
const FormContainer = tw.div`w-full flex-1 mt-8`

const SocialButtonsContainer = tw.div`flex flex-col items-center`
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-xl text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-1 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`

const DividerTextContainer = tw.div`my-12 border-b text-center relative`
const DividerText = tw.div`leading-none px-2 inline text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 `

const Form = tw.form`mx-auto max-w-xs`
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-xl focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`
const Signin = ({
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: 'Sign In With Google',
      url: '/api/google',
    },
  ],
}) => {
  const router = useRouter()
  const [error, setError] = useState([])
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const loginUser = async e => {
    e.preventDefault()
    try {
      if (!userId || !password) {
        setErrors([...errors, 'All Fileds are required'])
      }

      if (!userId) {
        setErrors([...errors, 'User Email or Username is required'])
      }
      if (!password) {
        setErrors([...errors, 'Password is required'])
      }

      await axios
        .post('http://localhost:3000/api/user/login', {
          userId,
          userPassword: password,
        })
        .then(response => {
          console.log(response)
          router.push('/')
        })
        .catch(error => {
          console.log(error)
        })
    } catch (error) {
      console.error(error)
    }
  }

  console.log(userId, password)
  return (
    <Content>
      <MainContainer>
        <LogoLink href="#">
          <Image tw="h-12 mx-auto" src={logo} />
        </LogoLink>
        <MainContent>
          <Heading>Sign In To SomeThing</Heading>
          <FormContainer>
            <SocialButtonsContainer>
              {socialButtons.map((socialButton, index) => (
                <SocialButton key={index} href={socialButton.url}>
                  <span className="iconContainer">
                    <Image
                      width="24px"
                      height="24px"
                      src={socialButton.iconImageSrc}
                      alt={socialButton.text}
                    />
                  </span>
                  <span className="text">{socialButton.text}</span>
                </SocialButton>
              ))}
            </SocialButtonsContainer>
            <DividerTextContainer>
              <DividerText>Or Sign in with your e-mail</DividerText>
            </DividerTextContainer>
            <Form onSubmit={e => loginUser(e)}>
              <Input
                type="email"
                placeholder="Email"
                value={userId}
                onChange={e => setUserId(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <SubmitButton type="submit">
                <LoginIcon className="icon" />
                <span className="text">Sign In</span>
              </SubmitButton>
            </Form>
            <p tw="mt-6 text-xs text-gray-600 text-center">
              <a href="#" tw="border-b border-gray-500 border-dotted">
                Forgot Password ?
              </a>
            </p>
            <p tw="mt-8 text-sm text-gray-600 text-center">
              Dont have an account?{' '}
              <a href="#" tw="border-b border-gray-500 border-dotted">
                Sign Up
              </a>
            </p>
          </FormContainer>
        </MainContent>
      </MainContainer>
    </Content>
  )
}

export default Signin
