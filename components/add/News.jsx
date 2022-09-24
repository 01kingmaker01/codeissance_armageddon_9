import { useEffect, useState } from 'react'
import tw from 'twin.macro'
function News() {
  const [news, setNews] = useState(0)
  const [type, setType] = useState(null)
  const [limit, setLimit] = useState(280)

  const handleSubmit = e => {
    e.preventDefault()
    if (news.length > 280) {
      alert("Your post can not be more than 280 characters long")
    }
  }

  useEffect(() => {
    news.length > 1 && setLimit(280 - news.length)
    if (news.length > 280) {
      alert("Character limit exceeded")
    }
  }, [news])

  return <form tw='flex flex-col'>
    <textarea name="news" id="news" rows="6" cols="50" placeholder="Tell us something interesting that we didn't know..." tw="p-1 border border-black rounded-md shadow-md" onChange={(e) => setNews(e.target.value)}></textarea>
    <p tw="text-sm">Character Limit: <span tw="text-red-500 font-bold">{parseInt(limit, 10)}</span>/280</p>

    <p tw="font-semibold mt-4">And what is that about?</p>
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
      <option value="">Community</option>
    </select>
    <button tw="bg-green-500 hover:border-green-500 hover:text-green-500 hover:shadow-lg hover:bg-white inline my-8 border rounded-lg p-2 text-white font-semibold hover:border-green-500 cursor-pointer border-white transition-all duration-300" onClick={handleSubmit}>Post</button>

  </form>
}

export default News
