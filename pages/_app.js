import GlobalStyles from './../styles/GlobalStyles'
import { Toaster } from 'react-hot-toast'

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Toaster />
    <Component {...pageProps} />
  </>
)

export default App
