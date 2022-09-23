import Sidebar from '../components/Sidebar'
import Center from '../components/Center'
import tw from 'twin.macro'

const Dashboard = () => {
  return (
    <div tw="h-screen overflow-hidden relative md:static">
      <main tw="flex">
        <Sidebar />
        <Center />
      </main>
    </div>
  )
}

export default Dashboard
