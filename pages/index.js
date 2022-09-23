import React from 'react'
import tw from 'twin.macro'
import { Button, Logo } from './../components'
import Nookies from 'nookies'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const IndexPage = () => <div>DashBoard</div>

export async function getServerSideProps(context) {
  const { req } = context

  const cookies = Nookies.get({ req })

  if (!cookies.token) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

export default IndexPage
