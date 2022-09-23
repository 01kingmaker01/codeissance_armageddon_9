import React from 'react'
import tw from 'twin.macro'
import Signup from '../components/register/Signup'
import { Button, Logo } from './../components'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const IndexPage = () => (
  <div css={styles.container({ hasBackground: true })}>
    <Signup />
  </div>
)

export default IndexPage
