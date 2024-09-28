import React from 'react'
import './appDownload.css'
import { assets } from '../../assets/frontend_assets/assets'
const AppDownload = () => {
  return (
    <div className=' text-center fs-2 m-auto fw-bold mt-5' id='app-download'>
      <p>For Better Experience Download <br />YummyBento app</p>
      <div className="platforms d-flex justify-content-center gap-3 mt-4">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
