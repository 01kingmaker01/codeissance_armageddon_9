import { useState, useEffect } from 'react'
import tw from 'twin.macro'
import RightArrow from 'feather-icons/dist/icons/arrow-right.svg'

function PersonalInfo({ setUserName, setName, setEmail, errors }) {
  return (
    <div tw="flex flex-col space-y-5">
      {/*User Name */}
      <label htmlFor="username">
        <p tw="pb-2 font-medium capitalize text-gray-700">Username</p>
        <input
          id="username"
          name="username"
          type="text"
          tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
          placeholder="janardan-doekar"
          onChange={e => setUserName(e.target.value)}
        />
      </label>

      {/*  Name */}

      {/* E-Mail */}
      <label htmlFor="email">
        <p tw="pb-2 font-medium text-gray-700">E-Mail ID</p>
        <input
          id="email"
          name="email"
          type="email"
          tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
          placeholder="example@domain.com"
          onChange={e => setEmail(e.target.value)}
        />
      </label>

      <label htmlFor="name">
        <p tw="pb-2 font-medium capitalize text-gray-700">Password</p>
        <input
          id="name"
          name="password"
          type="password"
          tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
          placeholder="Enter your password"
          onChange={e => setName(e.target.value)}
        />
      </label>

      {/* Submit
      <button tw="inline-flex text-xl font-bold items-center justify-center w-full py-3 space-x-2 font-medium text-white bg-indigo-600 border-indigo-500 rounded-lg hover:bg-indigo-500 hover:shadow">
        Next Section{' '}
        <span tw="mx-2">
          {' '}
          <RightArrow />
        </span>
      </button> */}

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
  )
}

export default PersonalInfo
