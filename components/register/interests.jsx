import tw from 'twin.macro'
import Check from 'feather-icons/dist/icons/check.svg'
import LeftArrow from 'feather-icons/dist/icons/arrow-left.svg'
import { INTERESTS } from '../../public/interests'
import { useEffect } from 'react'

// const Labels = tw.p(({ hasInterest }) => [
//   `bg-indigo-300 text-black  border m-2 cursor-pointer border-gray-700 inline rounded-full p-3 uppercase font-semibold text-xl`,
// ])

function Interests({
  interests,
  setInterests,
  setPageIndex,
  error,
  handleSubmit,
}) {
  return (
    <div tw="flex flex-wrap space-y-5">
      {INTERESTS.map(interest => {
        return (
          <p
            id={interest}
            key={interest}
            tw="border m-2 cursor-pointer border-gray-700 inline rounded-full p-3 hover:bg-indigo-400 hover:text-white hover:border-white uppercase font-semibold text-base transition duration-500"
            onClick={() => {
              interests.includes(interest)
                ? setInterests([...interests.filter(i => i !== interest)])
                : setInterests([...interests, interest])
            }}
          >
            {interest}
          </p>
        )
      })}

      <button
        onClick={handleSubmit}
        tw="inline-flex text-xl font-bold items-center justify-center w-full py-3 space-x-2 font-medium text-white bg-indigo-600 border-indigo-500 rounded-lg hover:bg-indigo-500 hover:shadow"
      >
        Submit
        <span tw="mx-2">
          {' '}
          <Check />
        </span>
      </button>
      <button
        onClick={() => setPageIndex(0)}
        tw="inline-flex font-semibold w-full py-3 space-x-2 font-medium hover:text-indigo-500 transition-all duration-500"
      >
        <span tw="mx-2">
          {' '}
          <LeftArrow />
        </span>
        Go Back{' '}
      </button>
    </div>
  )
}

export default Interests
