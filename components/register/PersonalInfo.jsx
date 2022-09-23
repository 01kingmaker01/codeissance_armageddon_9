import { useState, useEffect } from 'react'
import tw from 'twin.macro'
import RightArrow from 'feather-icons/dist/icons/arrow-right.svg'

function PersonalInfo({
  setUserName,
  setPassword,
  setVerifyPassword,
  setEmail,
  setPageIndex,
  errors,
}) {
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

      <label htmlFor="password">
        <p tw="pb-2 font-medium capitalize text-gray-700">Password</p>
        <input
          id="password"
          name="password"
          type="password"
          tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
          placeholder="Super Complex and Duper Easy"
          onChange={e => setPassword(e.target.value)}
        />
      </label>

      <label htmlFor="vPassword">
        <p tw="pb-2 font-medium capitalize text-gray-700">Verify Password</p>
        <input
          id="vPassword"
          name="vPassword"
          type="text"
          tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
          placeholder="Can You Remember It?"
          onChange={e => setVerifyPassword(e.target.value)}
        />
      </label>

      {/* Submit */}
      <button
        onClick={() => setPageIndex(1)}
        tw="inline-flex text-xl font-bold items-center justify-center w-full py-3 space-x-2 font-medium text-white bg-indigo-600 border-indigo-500 rounded-lg hover:bg-indigo-500 hover:shadow"
      >
        Next Section{' '}
        <span tw="mx-2">
          {' '}
          <RightArrow />
        </span>
      </button>

      {/* <div>
        {errors &&
          errors.map(error => {
            return (
              <p key={error} tw="text-red-500">
                🚩 {error}
              </p>
            )
          })}
      </div> */}
    </div>
  )
}

export default PersonalInfo
