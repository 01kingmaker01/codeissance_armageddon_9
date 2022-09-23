import { useState, useEffect } from 'react'
import tw from 'twin.macro'
import RightArrow from 'feather-icons/dist/icons/arrow-right.svg'
import axios from 'axios'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

function PersonalInfo({ }) {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [verifyPassword, setVerifyPassword] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()
  let notification

  const PASSWORD_REGEX =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gm

  const registerUser = async e => {
    try {
      e.preventDefault()
      if (!email && !username && !password && !verifyPassword) {
        setError('All fields are required!')
        return
      }

      if (!email) {
        setError('Please enter a valid email')
        return
      }
      if (!username) {
        setError('Please enter a username')
        return
      }
      if (!password) {
        setError('Please enter a password')
        return
      }
      if (!email) {
        setError('Please enter confirm password')
        return
      }

      if (password != verifyPassword) {
        setError('Passwords does not match!')
        return
      }

      if (!PASSWORD_REGEX.test(password)) {
        setError('Password is not valid!')
        return
      }

      notification = toast.loading('Checking Credentials!')
      await axios
        .post('http://localhost:3000/api/user/signup', {
          userEmail: email,
          userUsername: username,
          userPassword: password,
        })
        .then(response => {
          toast.success('User Registered!', {
            id: notification,
          })
          setError('')
          setEmial('')
          setUsername('')
          setPassword('')
          setVerifyPassword('')
          router.push('/')
        })
        .catch(error => {
          toast.error(error.response.data.error, {
            id: notification,
          })
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div tw="flex flex-col space-y-5">
      {/*User Name */}
      <form onSubmit={e => registerUser(e)}>
        <label
          htmlFor="username"
          tw="pb-2 font-medium capitalize text-gray-700"
        >
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
          placeholder="janardan-doekar"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        {/* E-Mail */}
        <label htmlFor="email" tw="pb-2 font-medium text-gray-700">
          E-Mail ID
        </label>
        <input
          id="email"
          name="email"
          type="email"
          tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
          placeholder="example@domain.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label
          htmlFor="password"
          tw="pb-2 font-medium capitalize text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
          placeholder="Super Complex and Duper Easy"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <label
          htmlFor="vPassword"
          tw="pb-2 font-medium capitalize text-gray-700"
        >
          Verify Password
        </label>
        <input
          id="vPassword"
          name="vPassword"
          type="text"
          tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
          placeholder="Can You Remember It?"
          value={verifyPassword}
          onChange={e => setVerifyPassword(e.target.value)}
        />

        {/* Submit */}
        <button
          tw="inline-flex text-xl font-bold items-center justify-center w-full py-3 space-x-2 font-medium text-white bg-indigo-600 border-indigo-500 rounded-lg hover:bg-indigo-500 hover:shadow"
          type="submit"
        >
          Register{' '}
          <span tw="mx-2">
            {' '}
            <RightArrow />
          </span>
        </button>

        <div>
          {error && (
            <div key={error} tw="text-red-500">
              🚩 {error}
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default PersonalInfo
