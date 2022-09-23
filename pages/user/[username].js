import tw from 'twin.macro'

export default function Username({ user }) {
  return (
    <>
      <section tw="p-2 mx-auto my-0 md:p-4 lg:w-8/12">
        {/* Hero Profile */}
        <div tw="flex flex-col justify-between py-4 md:flex-row ">
          {/* Image */}
          <div tw="mx-auto my-0">
            <div tw="w-32 h-32 rounded-full border-4 border-gray-400 bg-gray-300 flex justify-center items-center text-5xl font-bold">
              <p>{user.name[0]}</p>
            </div>
          </div>
          {/* Hero Information */}
          <div tw="flex flex-col flex-grow p-4">
            <h1 tw="mb-1 capitalize font-serif text-2xl font-bold text-gray-700">
              {user.name}
            </h1>
            <div tw="flex flex-col text-lg capitalize text-gray-700 md:flex-row w-60 md:w-full">
              <span>role</span> <span tw="hidden px-1 md:inline"> • </span>{' '}
              <span>department</span>{' '}
            </div>
            <h3 tw="text-lg text-gray-700">college</h3>
          </div>

          <div tw="flex gap-2 md:gap-0 justify-center md:flex-col">
            <a
              href={user.website}
              target="_blank"
              rel="noopener noreferrer"
              //   onClick={handleFollowClick}
              tw="border my-2 text-center rounded-full p-2 w-28 cursor-pointer font-semibold bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:border-indigo-600 border-white"
            >
              Contact
            </a>
            <button
              //   onClick={handleMessageClick}
              tw="border hover:bg-indigo-600 transition-all duration-300 hover:text-white my-2 rounded-full p-2 w-28  font-semibold border-indigo-600"
            >
              Message
            </button>
          </div>
        </div>
        <hr tw="my-4" />

        {/* Hero Achievements */}
        <div tw="flex flex-row flex-grow md:p-4 justify-around md:flex-row mx-auto">
          <div tw="flex flex-col w-28 items-center justify-center px-4 bg-indigo-600 border border-white rounded-md hover:bg-indigo-700">
            <h2 tw="text-2xl font-bold text-white">21</h2>
            <p tw="text-lg text-white">Followers</p>
          </div>
          <div tw="flex flex-col w-28 items-center justify-center px-4 bg-indigo-600 border border-white rounded-md hover:bg-indigo-700">
            <h2 tw="text-2xl font-bold text-white">{/* projects.length} */}</h2>
            <p tw="text-lg text-white">Projects</p>
          </div>
          <div tw="flex flex-col w-28 items-center justify-center px-4 bg-indigo-600 border border-white rounded-md hover:bg-indigo-700">
            <h2 tw="text-2xl font-bold text-white">04</h2>
            <p tw="text-lg text-white">Citations</p>
          </div>
        </div>

        <hr tw="my-4" />

        {/* Profile Information */}
        <section tw="flex flex-col self-end flex-grow p-4 ">
          <h2 tw="mb-1 font-serif text-2xl font-bold text-gray-700">
            Personal Information
          </h2>

          <div tw="flex flex-col justify-between gap-3 md:flex-row">
            <div tw="flex flex-col py-2">
              <h3 tw="mb-1 text-lg font-bold text-gray-700">Name</h3>
              <h4 tw="text-lg text-gray-700">name</h4>
            </div>

            <div tw="flex flex-col py-2">
              <h3 tw="mb-1 text-lg font-bold text-gray-700">E-Mail ID</h3>
              <a
                href={`mailto:${user.email}`}
                tw="text-lg text-indigo-600 hover:text-indigo-600"
              >
                {user.email}
              </a>
            </div>

            <div tw="flex flex-col py-2">
              {/* <h3 tw="mb-1 text-lg font-bold text-gray-700">
                    Location
                  </h3> */}
              {/* <h4 tw="text-lg text-gray-700">Mumbai, Maharashtra</h4> */}
            </div>
          </div>
        </section>

        {/* Profile Education */}
        <section tw="flex flex-col flex-grow p-4 ">
          <h2 tw="mb-1 font-serif text-2xl font-bold text-gray-700">
            Academics Information
          </h2>

          <div tw="flex flex-col justify-between gap-3 md:flex-row">
            <div tw="flex flex-col py-2">
              <h3 tw="mb-1 text-lg font-bold text-gray-700">Role</h3>{' '}
              <a
                href={`mailto:${user.email}`}
                tw="text-lg text-indigo-600 hover:text-indigo-600"
              >
                email
              </a>
            </div>

            <div tw="flex flex-col py-2">
              <h3 tw="mb-1 text-lg font-bold text-gray-700">College</h3>
              <h4 tw="text-lg text-gray-700">college</h4>
            </div>

            <div tw="flex flex-col py-2">
              <h3 tw="mb-1 text-lg font-bold text-gray-700">Major</h3>
              <h4 tw="text-lg text-gray-700">major</h4>
            </div>

            <div tw="flex flex-col py-2">
              <h3 tw="mb-1 text-lg font-bold text-gray-700">University</h3>
              <h4 tw="text-lg text-gray-700">university</h4>
            </div>
          </div>
        </section>

        <hr tw="my-4" />
        {/* Projects */}
        <section tw="flex flex-col flex-grow p-4 ">
          <h2 tw="mb-1 font-serif text-2xl font-bold text-gray-700">
            Projects
          </h2>
          {/* <ProjectCard /> */}
        </section>
      </section>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { username: 'clumsycoder' },
      },
    ],
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const user = {
    username: 'clumsycoder',
    name: 'Kaushal Joshi',
    email: '7joshikaushal@gmail.com',
    website: 'https://www.kaushaljoshi.dev',
  }
  return {
    props: {
      user,
    },
  }
}
