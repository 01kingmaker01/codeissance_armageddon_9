import React from 'react'
import tw from 'twin.macro'
import { Button, Logo } from '../components'
import Nookies from 'nookies'
import axios from 'axios'
import * as jwt from 'jsonwebtoken'
import Link from 'next/link'
import Events from '../components/add/Event'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const IndexPage = ({ user }) => {
  return (
    <div>
      <Events />
    </div>
  )
}

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

  const response = await fetch(
    `http://localhost:3000/api/user/${cookies.token}`,
  )

  const { user } = await response.json()

  return {
    props: {
      user,
    },
  }
}

export default IndexPage
