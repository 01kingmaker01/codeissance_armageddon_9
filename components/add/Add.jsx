import tw from 'twin.macro'
import Meetup from './Meetup'
import Event from './Event'
import Community from './Community'
import News from './News'

import { useState, useEffect } from 'react'

const RenderNext = type => {
  switch (type) {
    case "meetup":
      return <Meetup />
    case "event":
      return <Event />
    case "news":
      return <News />
    case "community":
      return <Community />
  }

}
function Add() {
  const [type, setType] = useState('')
  const [showType, setShowType] = useState('')

  console.log(showType)
  useEffect(() => {
    console.log(type)

  }, [type])

  const handleLetsGoCLick = e => {
    e.preventDefault()
    setShowType(type)
  }
  return (
    <div tw="flex items-center">
      <form tw="flex items-center flex-col py-8 my-8 border rounded-lg border-gray-900 w-10/12 md:w-8/12 lg:w-6/12 mx-auto" onSubmit={e => handleLetsGoCLick(e)}>
        <label htmlFor="type" tw="md:w-6/12">
          <p tw="pb-2 font-medium text-gray-700">What's in Your Mind?!</p>

          <select
            tw="w-full px-3 py-3 border rounded-lg border-gray-200  focus:outline-none focus:border-gray-500 hover:shadow"
            id="type"
            name="type"
            onChange={(e) =>
              setType(e.target.value)
            }
          >
            <option value="meetup">Meetup</option>
            <option value="event">Event</option>
            <option value="news">News</option>
            <option value="community">Community</option>
          </select>
        </label>

        <button tw="bg-green-500 my-8 border rounded-lg p-2  text-white font-semibold hover:border-green-500 cursor-pointer border-white transition-all duration-300" type="submit">Let's go!</button>

        {RenderNext(showType)}
      </form>
    </div>
  )
}

export default Add
