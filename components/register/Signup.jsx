import { useState, useEffect } from 'react'
const axios = require('axios').default

import RightArrow from 'feather-icons/dist/icons/arrow-right.svg'
import tw from 'twin.macro'
import CITIES from '../../public/cities'
import STATES from '../../public/states'

import PersonalInfo from './PersonalInfo'
import ContactInfo from './ContactInfo'
import Interests from './Interests'
export default function SignUp() {
  const [pageIdex, setPageIndex] = useState(0)
  const [password, setPassword] = useState(null)
  const [verifyPassword, setVerifyPassword] = useState(null)
  const [userName, setUserName] = useState(null)
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [contact, setContact] = useState(null)
  const [birthDate, setBirthDate] = useState(null)
  const [website, setWebsite] = useState(null)
  const [location, setLocation] = useState(null)
  const [position, setPosition] = useState(null)
  const [organization, setOrganization] = useState(null)
  const [interests, setInterests] = useState([])
  const [stateIndex, setStateIndex] = useState(null)
  const [errors, setErrors] = useState([])

  const WEBSITE_REGEX =
    /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const CONTACT_REGEX =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

  const handleSubmit = async e => {
    e.preventDefault()
    setErrors([])
    if (
      !userName ||
      !password ||
      !name ||
      !email ||
      !contact ||
      !birthDate ||
      !location ||
      !position ||
      !website ||
      !organization ||
      !interests
    ) {
      setErrors([...errors, 'All fields are required!'])
    }

    if (!EMAIL_REGEX.test(email)) {
      setErrors([...errors, 'E-Mail ID is invalid!'])
    }

    if (!CONTACT_REGEX.test(contact)) {
      setErrors([...errors, 'Contact number is invalid'])
    }

    if (!WEBSITE_REGEX.test(website)) {
      setErrors([...errors, 'Website URL is invalid!'])
    }

    if (password !== verifyPassword) {
      setErrors([...errors, 'Password are not matching.'])
    }
    // TODO: Check if username is already taken
    // const isUsernameAvailable = await axios.get('/api/user/getUser', {
    //   params: {
    //     uid: userName,
    //   },
    // })

    // if (isUsernameAvailable) {
    //   alert('Username already exists!')
    // }
    console.log({
      userName,
      email,
      contact,
      name,
      location,
      position,
      organization,
      website,
      interests,
    })
  }

  return (
    <>
      <div tw="p-8 mx-auto my-10 bg-white shadow rounded-xl md:w-6/12">
        <h1 tw="text-4xl font-bold">User Registration</h1>
        <p tw="text-gray-500 my-2">
          Any queries?{' '}
          <a href="#" tw="text-blue-500 underline font-semibold">
            support@commubook.com
          </a>
        </p>

        <form tw="my-10" onSubmit={handleSubmit}>
          <div tw="flex flex-col space-y-5">
            {pageIdex === 0 ? (
              <PersonalInfo
                setVerifyPassword={setVerifyPassword}
                setPassword={setPassword}
                setUserName={setUserName}
                setEmail={setEmail}
                setPageIndex={setPageIndex}
                errors={errors}
              />
            ) : pageIdex === 1 ? (
              <ContactInfo
                setName={setName}
                setContact={setContact}
                setBirthDate={setBirthDate}
                setPageIndex={setPageIndex}
                setWebsite={setWebsite}
                errors={errors}
              />
            ) : (
              <Interests
                setInterests={setInterests}
                interests={interests}
                setPageIndex={setPageIndex}
                handleSubmit={handleSubmit}
              />
            )}

            <div>
              {errors &&
                errors.map(error => {
                  return (
                    <p key={error} tw="text-red-500">
                      🚩 {error}
                    </p>
                  )
                })}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
