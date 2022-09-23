import React from 'react'
// import UserInfo from './UserInfo'
import Profile from './Profile'
import Features from './Features'
import tw from 'twin.macro'

import UserIcon from 'feather-icons/dist/icons/user.svg'
// import LogOutIcon from 'feather-icons/dist/icons/log-out.svg '

const SidebarCon = tw.div`space-y-4  p-5 text-sm border-r border-gray-900 overflow-y-scroll    h-screen sm:max-w-[12rem] lg:max-w-[15rem ] md:(inline-block transition-none scrollbar-hide  translate-x-0 static  z-0) pb-20 -translate-x-full  transition-all  w-screen	ease-in-out duration-300 absolute z-10`

const LogoCon = tw.div`h-12 flex justify-center items-center `

const UserInfo = tw.div`m-2 flex items-center `

const MenuItem = tw.div`py-2 flex items-center`

const Sidebar = () => {
  return (
    <SidebarCon>
      <LogoCon>
        <h1 tw="text-3xl font-bold ">Hackathon</h1>
      </LogoCon>
      <UserInfo>
        <span tw="h-10 w-10 border border-black rounded-full flex justify-center items-center mr-2 text-xl p-2 ">
          K
        </span>
        Name Surname
      </UserInfo>
      <MenuItem>
        <UserIcon /> Profile
      </MenuItem>
      <MenuItem>MeetUps</MenuItem>
      <MenuItem>Events</MenuItem>
      <MenuItem>News</MenuItem>
      <MenuItem>Log Out</MenuItem>
    </SidebarCon>
  )
}

export default Sidebar
