import tw from 'twin.macro'
import RightArrow from 'feather-icons/dist/icons/arrow-right.svg'
import LeftArrow from 'feather-icons/dist/icons/arrow-left.svg'
function baseInfo({
  setName,
  setBirthDate,
  setContact,
  setWebsite,
  setPageIndex,
}) {
  return (
    <div tw="flex flex-col space-y-5">
      {/* Name */}
      <label htmlFor="name">
        <p tw="pb-2 font-medium capitalize text-gray-700">Full Name</p>
        <input
          id="name"
          name="name"
          type="text"
          tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
          placeholder="Janardan Doekar"
          onChange={e => setName(e.target.value)}
        />
      </label>

      {/* Contact Number */}
      <label htmlFor="contact">
        <p tw="pb-2 font-medium capitalize text-gray-700">Contact Number</p>
        <input
          id="contact"
          name="contact"
          type="number"
          tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
          placeholder="WhatsApp Preferred"
          onChange={e => setContact(e.target.value)}
        />
      </label>

      {/* Birth Date */}
      <label htmlFor="date">
        <p tw="pb-2 font-medium capitalize text-gray-700">Birth Date</p>
        <input
          id="date"
          name="date"
          type="date"
          tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
          onChange={e => setBirthDate(e.target.value)}
        />
      </label>

      {/* Birth Date */}
      <label htmlFor="website">
        <p tw="pb-2 font-medium capitalize text-gray-700">
          Social Profile Link
        </p>
        <input
          id="website"
          name="website"
          type="text"
          tw="w-full px-3 py-3 border rounded-lg border-gray-200 focus:outline-none focus:border-gray-500 hover:shadow"
          placeholder="Where Can Folks Connect With You?"
          onChange={e => setWebsite(e.target.value)}
        />
      </label>

      {/* Submit */}
      <button
        onClick={() => setPageIndex(2)}
        tw="inline-flex text-xl font-bold items-center justify-center w-full py-3 space-x-2 font-medium text-white bg-indigo-600 border-indigo-500 rounded-lg hover:bg-indigo-500 hover:shadow"
      >
        Next Section{' '}
        <span tw="mx-2">
          {' '}
          <RightArrow />
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

export default baseInfo
