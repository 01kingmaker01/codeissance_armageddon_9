import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import { Button, Logo } from './../components'
import axios from 'axios'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const IndexPage = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const signInUser = async (e, userEmail, userUsername, userPassword) => {
    e.preventDefault()
    await axios
      .post('http://localhost:3000/api/user/signup', {
        userEmail,
        userUsername,
        userPassword,
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <div tw="mt-2">
        <form
          tw="mx-32 flex flex-col space-y-2"
          onSubmit={e => signInUser(e, email, username, password)}
        >
          <input
            tw="bg-gray-100 w-full focus:outline-none font-bold border-2 border-gray-300 rounded-md"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            tw="bg-gray-100 w-full focus:outline-none font-bold border-2 border-gray-300 rounded-md"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            tw="bg-gray-100 w-full focus:outline-none font-bold border-2 border-gray-300 rounded-md"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" tw="w-32 rounded-md p-3 bg-blue-600 text-white">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default IndexPage
