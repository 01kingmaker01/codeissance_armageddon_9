import React from 'react'
import UserInfo from './UserInfo'
import Profile from './Profile'
import Features from './Features'
import tw from 'twin.macro'

const SidebarCon = tw.div`space-y-4 text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll   bg-black h-screen sm:max-w-[12rem] lg:max-w-[15rem ] md:(inline-block transition-none  translate-x-0 static w-[inherit] z-0) pb-20 -translate-x-full  transition-all  w-screen	ease-in-out duration-300 absolute z-10`

const Sidebar = () => {
  return (
    <SidebarCon>
      <UserInfo />
      <Profile />
      <Features />
    </SidebarCon>
  )
}

export default Sidebar
