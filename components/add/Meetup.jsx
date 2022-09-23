import { useEffect, useState } from "react";
import tw from "twin.macro";

import CITIES from "../../public/cities";
import STATES from "../../public/states";

function Meetup() {
  const [meetUp, setMeetUp] = useState({});

  const [stateIndex, setStateIndex] = useState();
  useEffect(() => {
    console.log(meetUp);
  }, [meetUp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(stateIndex));
  };

  return (
    <div tw="flex flex-col space-y-5">
      <form tw="flex flex-col gap-2">
        <label htmlFor="name" tw="pb-2 font-medium capitalize text-gray-700">
          Meetup Title
          <input
            id="name"
            name="name"
            type="text"
            tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
            placeholder="The cool kids club"
            value={meetUp.name}
            onChange={(e) => setMeetUp({ ...meetUp, name: e.target.value })}
          />
        </label>

        <label
          htmlFor="description"
          tw="pb-2 font-medium capitalize flex flex-col text-gray-700"
        >
          Meetup Description
          <textarea
            name="description"
            id="description"
            rows="6"
            cols="50"
            placeholder="More than what, why and where. Please!"
            tw="p-1 border border-black rounded-md shadow-md"
            onChange={(e) =>
              setMeetUp({ ...meetUp, description: e.target.value })
            }
          ></textarea>
        </label>



        <div tw="flex md:flex-col flex-wrap gap-2">
          <label htmlFor="date" tw="pb-2 font-medium capitalize text-gray-700">
            Date
            <input
              id="date"
              name="date"
              type="date"
              tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
              // placeholder="The cool kids club"
              value={meetUp.date}
              onChange={(e) => setMeetUp({ ...meetUp, date: e.target.value })}
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
              value={meetUp.from}
              onChange={(e) => setMeetUp({ ...meetUp, from: e.target.value })}
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
              value={meetUp.until}
              onChange={(e) => setMeetUp({ ...meetUp, until: e.target.value })}
            />
          </label>
        </div>

        <div tw="flex md:flex-col flex-wrap gap-2">
          {/* State */}
          <label htmlFor="state" tw="pb-2 font-medium capitalize text-gray-700">
            <p tw="pb-2 font-medium text-gray-700">State</p>
            <select
              tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
              id="state"
              name="state"
              onChange={(e) => {
                setMeetUp({ ...meetUp, state: e.target.value });
                setStateIndex(e.target.selectedIndex);
              }}
            >
              <option>Select State</option>
              {STATES.map((state) => {
                return (
                  <option key={state} value={state}>
                    {state}
                  </option>
                );
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
              onChange={(e) => setMeetUp({ ...meetUp, city: e.target.value })}
            >
              <option>Select City</option>
              {stateIndex &&
                CITIES[stateIndex].split("|").map((city) => {
                  return (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  );
                })}
            </select>
          </label>


          <label
            htmlFor="capacity"
            tw="font-medium capitalize text-gray-700"
          >
            Capacity
            <input
              id="capacity"
              name="capacity"
              type="number"
              tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
              // placeholder="The cool kids club"
              value={meetUp.capacity}
              onChange={(e) => setMeetUp({ ...meetUp, capacity: e.target.value })}
            />
          </label>
        </div>

        <label htmlFor="tags" tw="pb-2 font-medium capitalize text-gray-700">
          Suitable Tags
          <input
            id="tags"
            name="tags"
            type="text"
            tw="w-full px-3 py-3 border lowercase rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
            placeholder="Comma,separated,tags,to,keep,it,easy"
            value={meetUp.name}
            onChange={(e) => setMeetUp({ ...meetUp, tags: e.target.tags })}
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
  );
}

export default Meetup;
