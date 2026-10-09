import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import DisplayRow from './Components/DisplayRow/DisplayRow'
import Footer from './Components/Footer/Footer'
import Account from './Pages/Account/Account'
import SignIn from './Pages/SignIn/SignIn'

function Home() {
  return (
    <>
      <Banner />
      <DisplayRow />
      <Footer />
    </>
  )
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App