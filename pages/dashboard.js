import Sidebar from '../components/Sidebar'
import Center from '../components/Center'

const Dashboard = () => {
  return (
    <div tw="h-screen flex overflow-hidden relative md:static">
      <Sidebar />
      <Center />
    </div>
  )
}

export default Dashboard
