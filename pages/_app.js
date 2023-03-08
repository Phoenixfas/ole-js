import '@/styles/globals.css'
import Navbar from './Navbar'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
// import { PersistGate } from 'redux-persist/integration/react'
import React from 'react'
import Footer from './Footer'
import TipModal from './TipModal'
import PicModal from './PicModal'
import FacilModal from './FacilModal'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
          {/* <PersistGate loading={null} persistor={persistor} > */}
              <Navbar />
              <TipModal />
              <FacilModal />
              <PicModal />
              <Component {...pageProps} />
              <Footer />
          {/* </PersistGate> */}
      </Provider>
    </>
  )
}
