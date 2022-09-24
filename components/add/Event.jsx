import { useEffect, useState } from "react";
import Select from 'react-select';

import tw from "twin.macro";
import CITIES from "../../public/cities";
import STATES from "../../public/states";
import { ARR_OBJ_INTERESTS } from "../../public/arrObjInterest"

function Event() {
  const [event, setEvent] = useState({})

  const [tags, setTags] = useState([])
  const [stateIndex, setStateIndex] = useState();
  useEffect(() => {
    let newTags = []
    tags && tags.forEach(tag => {
      const { label } = tag

      newTags.push(label)
    })
    setEvent({ ...event, tags: newTags })
  }, [tags]);


  const onChange = (name, value) => {
    setEvent({ ...event, [name]: value })
  }

  return (
    <div tw="flex flex-col space-y-5">
      <form tw="flex flex-col gap-2 mx-5">
        <label htmlFor="name" tw="pb-2 font-medium capitalize text-gray-700">
          Event Information
          <input
            id="name"
            name="name"
            type="text"
            tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
            placeholder="The cool kids club"
            value={event.name}
            onChange={e => onChange(e.target.name, e.target.value)}
          />
        </label>

        <label
          htmlFor="description"
          tw="pb-2 font-medium capitalize flex flex-col text-gray-700"
        >
          Event Description
          <textarea
            name="description"
            id="description"
            rows="6"
            cols="50"
            placeholder="More than what, why and where. Please!"
            tw="p-1 border border-black rounded-md shadow-md"
            onChange={e => onChange(e.target.name, e.target.value)}
          ></textarea>
        </label>

        <label htmlFor="type" tw="md:w-6/12">
          <p tw="pb-2 font-medium text-gray-700">What Is It About?</p>

          <select
            tw="w-full px-3 py-3 border rounded-lg border-gray-200  focus:outline-none focus:border-gray-500 hover:shadow"
            id="type"
            name="type"
            onChange={e => onChange(e.target.name, e.target.value)}
          >
            <option value="hackathon">Hackathon</option>
            <option value="workshop">workshop</option>
            <option value="seminar">seminar</option>
            <option value="technical">Technical</option>
            <option value="misc">Miscellaneous</option>
          </select>
        </label>

        <div tw="flex md:flex-col flex-wrap gap-2">
          <label htmlFor="mode" tw="pb-2 font-medium capitalize text-gray-700">
            Event Mode
            <select
              tw="w-full px-3 py-3 border rounded-lg border-gray-200  focus:outline-none focus:border-gray-500 hover:shadow"
              id="mode"
              name="mode"
              onChange={e => onChange(e.target.name, e.target.value)}
            >
              <option value="offline">Offline</option>
              <option value="online">Online</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </label>

          <label
            htmlFor="capacity"
            tw="pb-2 font-medium capitalize text-gray-700"
          >
            Capacity
            <input
              id="capacity"
              name="capacity"
              type="number"
              tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
              // placeholder="The cool kids club"
              value={event.capacity}
              onChange={e => onChange(e.target.name, e.target.value)}
            />
          </label>
        </div>

        <div tw="flex md:flex-col flex-wrap gap-2">
          <label htmlFor="date" tw="pb-2 font-medium capitalize text-gray-700">
            Date
            <input
              id="date"
              name="date"
              type="date"
              tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
              // placeholder="The cool kids club"
              value={event.date}
              onChange={e => onChange(e.target.name, e.target.value)}
            />
          </label>
          <label htmlFor="from" tw="pb-2 font-medium capitalize text-gray-700">
            Time (From)
            <input
              id="from"
              name="from"
              type="time"
              tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
              // placeholder="The cool kids club"
              value={event.from}
              onChange={e => onChange(e.target.name, e.target.value)}
            />
          </label>
          <label htmlFor="until" tw="pb-2 font-medium capitalize text-gray-700">
            Until (approx)
            <input
              id="until"
              name="until"
              type="time"
              tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
              // placeholder="The cool kids club"
              value={event.until}
              onChange={e => onChange(e.target.name, e.target.value)}
            />
          </label>
        </div>

        <div tw="flex flex-wrap my-2 flex-col">
          <label htmlFor="amount" tw="pb-2 font-medium text-gray-700">
            Would it be a free event or charges?
            <div tw="flex gap-2">
              <input
                type="radio"
                value="free"
                name="charges"
                onChange={e => onChange(e.target.name, e.target.value)}
              />
              Free
              <input
                type="radio"
                value="paid"
                name="charges"
                onChange={e => onChange(e.target.name, e.target.value)}
              />{' '}
              Paid
            </div>
          </label>
          <div tw="flex flex-col space-y-5">
            {event.charges === 'paid' && (
              <>
                <label
                  htmlFor="amount"
                  tw="pb-2 font-medium capitalize text-gray-700"
                >
                  How much it would cost in INR?
                  <input
                    id="amount"
                    name="amount"
                    type="number"
                    tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
                    placeholder="Dedso Rupaya?"
                    value={event.amount}
                    onChange={e => onChange(e.target.name, e.target.value)}
                  />
                </label>{' '}
              </>
            )}
          </div>
        </div>

        <div tw="flex md:flex-col flex-wrap gap-2">
          {/* State */}
          <label htmlFor="state" tw="pb-2 font-medium capitalize text-gray-700">
            <p tw="pb-2 font-medium text-gray-700">State</p>
            <select
              tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
              id="state"
              name="state"
              onChange={e => {
                onChange(e.target.name, e.target.value)
                setStateIndex(e.target.selectedIndex)
              }}
            >
              <option>Select State</option>
              {STATES.map(state => {
                return (
                  <option key={state} value={state}>
                    {state}
                  </option>
                )
              })}
            </select>
          </label>

          {/* Cities */}
          <label htmlFor="city" tw="pb-2 font-medium capitalize text-gray-700">
            <p tw="pb-2 font-medium text-gray-700">City</p>
            <select
              tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
              id="city"
              name="city"
              onChange={e => onChange(e.target.name, e.target.value)}
            >
              <option>Select City</option>
              {stateIndex &&
                CITIES[stateIndex].split('|').map(city => {
                  return (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  )
                })}
            </select>
          </label>
        </div>

        <label htmlFor="type">
          <p tw="pb-2 font-medium text-gray-700">What Other Aspects Are You Planning to Cover?</p>

          <Select
            // defaultValue={[colourOptions[2], colourOptions[3]]}
            isMulti
            name="Interests"
            options={ARR_OBJ_INTERESTS}
            onChange={setTags}
          />
        </label>

        <button
          tw="bg-green-500 hover:border-green-500 hover:text-green-500 hover:shadow-lg hover:bg-white inline my-8 border rounded-lg p-2 text-white font-semibold hover:border-green-500 cursor-pointer border-white transition-all duration-300"
          onClick={handleSubmit}
        >
          Post
        </button>
      </form>
    </div>
  )
}

export default Event
