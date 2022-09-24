import Event from '../components/event'
import tw from 'twin.macro'
import Link from 'next/link'

import Calendar from 'feather-icons/dist/icons/Calendar.svg'
import MapPin from 'feather-icons/dist/icons/map-pin.svg'
import Plus from 'feather-icons/dist/icons/plus.svg'
import Mail from 'feather-icons/dist/icons/mail.svg'

export default function All({ events }) {
  return (
    <>
      <h1 tw="text-center mt-8 text-xl font-bold">
        All Events, Hackathons, and Meetups in Your City
      </h1>
      <section tw="flex flex-wrap mx-auto justify-between p-4">
        {events.map(event => {
          return (
            <>
              <div
                key={event.id}
                tw="border p-2 w-10/12 lg:w-8/12 my-4 flex flex-wrap justify-between mx-auto rounded-lg "
              >
                <div tw="flex  flex-col">
                  <h2 tw="text-2xl font-bold font-serif text-indigo-600 hover:text-indigo-800 transition-all duration-500">
                    OTC Offline Meetup v2.0
                  </h2>
                  <p tw="font-semibold my-1">
                    Organized by{' '}
                    <Link
                      href={`/user/${event?.organizer?.username}`}
                      tw="text-indigo-600 underline"
                    >
                      Harsh Kapadiya
                      {/* {event?.organizer?.name} */}
                    </Link>
                  </p>

                  <div tw="flex gap-3 my-4 font-semibold">
                    <span tw="flex gap-1">
                      <Calendar /> 09/10/2022
                    </span>
                    <span tw="flex gap-1">
                      <MapPin /> Mumbai
                    </span>
                  </div>
                  <div tw="my-2 flex flex-wrap gap-1">
                    {event.tags?.map(event => {
                      return (
                        <p tw="p-1 border rounded-md inline text-sm font-semibold">
                          {event}
                        </p>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => alert('You will be notified soon!')}
                    tw="font-bold flex w-40 justify-center items-center gap-1 text-white p-2 border text-sm rounded-md hover:border-indigo-500 hover:bg-white hover:text-indigo-600 bg-green-600 transition-all duration-300 border-white"
                  >
                    Show Interest <Plus />
                  </button>
                  <button tw="font-bold flex items-center gap-1 text-white p-2 border text-sm rounded-md hover:border-indigo-500 hover:bg-white hover:text-indigo-600 bg-red-600 transition-all duration-300 border-white">
                    Contact Organizer <Mail />
                  </button>
                </div>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export async function getStaticProps() {
  const events = [
    {
      id: 'otc-2',
      name: 'OTC 2',
      description: 'This is the OTC 2 event',
      date: '10/10/2022',
      time: '09:10am',
      organizer: {
        username: 'clumsycoder',
        name: 'Harsh Kapadiya',
        email: 'harsh.kapadiya@gmail.com',
      },
      location: {
        city: 'Mumbai',
        state: 'Maharashtra',
      },
      tags: ['community', 'networking', 'devops', 'development', 'dsa'],
    },
    {
      id: 'otc-2',
      name: 'OTC 2',
      description: 'This is the OTC 2 event',
      date: '10/10/2022',
      time: '09:10am',
      organizer: {
        username: 'clumsycoder',
        name: 'Harsh Kapadiya',
        email: 'harsh.kapadiya@gmail.com',
      },
      location: {
        city: 'Mumbai',
        state: 'Maharashtra',
      },
      tags: ['community', 'networking', 'devops', 'development', 'dsa'],
    },
    {
      id: 'otc-2',
      name: 'OTC 2',
      description: 'This is the OTC 2 event',
      date: '10/10/2022',
      time: '09:10am',
      organizer: {
        username: 'clumsycoder',
        name: 'Harsh Kapadiya',
        email: 'harsh.kapadiya@gmail.com',
      },
      location: {
        city: 'Mumbai',
        state: 'Maharashtra',
      },
      tags: ['community', 'networking', 'devops', 'development', 'dsa'],
    },
    {
      id: 'otc-2',
      name: 'OTC 2',
      description: 'This is the OTC 2 event',
      date: '10/10/2022',
      time: '09:10am',
      organizer: {
        username: 'clumsycoder',
        name: 'Harsh Kapadiya',
        email: 'harsh.kapadiya@gmail.com',
      },
      location: {
        city: 'Mumbai',
        state: 'Maharashtra',
      },
      tags: ['community', 'networking', 'devops', 'development', 'dsa'],
    },
  ]
  return {
    props: { events },
  }
}
