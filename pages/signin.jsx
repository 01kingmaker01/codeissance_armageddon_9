import React from 'react'
import SignInComponent from '../components/signin'
import Nookies from 'nookies'

const Signin = () => {
  return <SignInComponent />
}

export async function getServerSideProps(context) {
  const { req } = context

  const cookies = Nookies.get({ req })

  if (cookies.token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

export default Signin
