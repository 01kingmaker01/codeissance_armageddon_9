import React from 'react'
import Signup from '../components/register/Signup'
import Nookies from 'nookies'

const Login = () => {
  return <Signup />
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

export default Login
