import React from 'react'
import tw from 'twin.macro'
import Card from './Card'

const Container = tw.span`flex-grow relative text-white h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide`
const TopCon = tw.span`flex text-black items-center absolute top-0`
const InputField = tw.input`h-8 w-2/5 border rounded-full border-gray-400 `
const MainCon = tw.div` `
const Center = () => {
  return (
    <Container>
      <TopCon>
        <InputField type="search" name="search" id="search" />
        <button>btn1</button>
        <button>btn2</button>
      </TopCon>
      <MainCon>
        <Card />
      </MainCon>
    </Container>
  )
}

export default Center
