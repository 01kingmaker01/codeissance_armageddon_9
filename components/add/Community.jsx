import { useEffect, useState } from "react";
import Select from 'react-select';

import tw from 'twin.macro'
import { INTERESTS } from "../../public/interests"
import { ARR_OBJ_INTERESTS } from "../../public/arrObjInterest"


function Community() {
  const [community, setCommunity] = useState({});
  const [tags, setTags] = useState([])

  useEffect(() => {
    let newTags = []
    tags && tags.forEach(tag => {
      const { label } = tag

      newTags.push(label)
    })
    setCommunity({ ...community, tags: newTags })
  }, [tags]);

  return <div tw="flex flex-col space-y-5">
    <form tw="flex flex-col gap-2">
      <label htmlFor="name" tw="pb-2 font-medium capitalize text-gray-700">
        Community Name
        <input
          id="name"
          name="name"
          type="text"
          tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
          placeholder="The cool kids club"
          value={community.name}
          onChange={(e) => setCommunity({ ...community, name: e.target.value })}
        />
      </label>

      <label htmlFor="tagline" tw="pb-2 font-medium capitalize text-gray-700">
        Tagline
        <input
          id="tagline"
          name="tagline"
          type="text"
          tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
          placeholder="We cool, the Earth Hot"
          value={community.tagline}
          onChange={(e) => setCommunity({ ...community, tagline: e.target.value })}
        />
      </label>

      <label htmlFor="tagline" tw="pb-2 font-medium capitalize text-gray-700">
        Describe it
      </label>
      <textarea name="news" id="news" rows="6" cols="50" placeholder="Tell us something interesting that we didn't know..." tw="p-1 border border-black rounded-md shadow-md" onChange={(e) => setCommunity({ ...community, description: e.target.value })}></textarea>

      <label htmlFor="type">
        <p tw="pb-2 font-medium text-gray-700">What Would Be the Niche of Your Community?</p>

        <select
          tw="w-full px-3 py-3 border rounded-lg border-gray-200  focus:outline-none focus:border-gray-500 hover:shadow"
          id="type"
          name="type"
          onChange={(e) => setCommunity({ ...community, niche: e.target.value })}
        >
          {
            INTERESTS?.map(interest => {
              return (
                <option key={interest} value={interest} tw="capitalize">{interest}</option>)
            })
          }

        </select>
      </label>

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

      <label htmlFor="website">
        <p tw="pb-2 font-medium capitalize text-gray-700">
          Social Profile Link
        </p>
        <input
          id="website"
          name="website"
          type="text"
          tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
          placeholder="Where Can We Connect With You?"
          onChange={(e) => setCommunity({ ...community, website: e.target.value })}
        />
      </label>

    </form>
  </div>
}

export default Community
