import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Banana } from '@rize-labs/banana-wallet-sdk/dist/BananaProvider'
import { Chains } from '@rize-labs/banana-wallet-sdk/dist/Constants';
import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Dashboard, Home, Profile } from './pages';

const App = () => {

  return (
    <div className="relative sm:-8 bg-[#13131a] min-h-screen flex flex-row">
     

      <div className="flex-1 max-sm:w-full max-w-screen mx-auto">
     

        <Routes>
          <Route path="/app" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/app/create-campaign" element={<CreateCampaign />} />
          <Route path="/app/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

export default App