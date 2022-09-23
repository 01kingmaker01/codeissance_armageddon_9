import { useState, useEffect } from 'react'

import RightArrow from 'feather-icons/dist/icons/arrow-right.svg'
import tw from 'twin.macro'
import CITIES from '../public/cities'
import STATES from '../public/states'

import PersonalInfo from './register/PersonalInfo'

export default function SignUp() {
  const [pageIdex, setPageIndex] = useState(0)
  const [password, setPassword] = useState(null)
  const [userName, setUserName] = useState(null)
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

  const handleSubmit = e => {
    e.preventDefault()
    setErrors([])
    if (
      !userName ||
      !password ||
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

    // TODO: Check if username is already taken

    console.log({
      userName,
      email,
      contact,
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
            <PersonalInfo
              setPassword={setPassword}
              setUserName={setUserName}
              setBirthDate={setBirthDate}
              errors={errors}
            />

            {/* Submit */}
            <button tw="inline-flex text-xl font-bold items-center justify-center w-full py-3 space-x-2 font-medium text-white bg-indigo-600 border-indigo-500 rounded-lg hover:bg-indigo-500 hover:shadow">
              Next Section{' '}
              <span tw="mx-2">
                {' '}
                <RightArrow />
              </span>
            </button>

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
