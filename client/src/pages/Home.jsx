import React, { useState, useEffect } from 'react'
import { Sidebar, Navbar } from '../components';
import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

const Home = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
   <>
       <div className="p-4 relative sm:-8 bg-[#13131a] dark:bg-[#FFFDD0] dark:text-black min-h-screen flex flex-row">
       <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
        </div>
        <div className="flex-1 max-sm:w-full max-w-screen mx-auto sm:pr-5">
          <Navbar/>
    <DisplayCampaigns 
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
   </div>
   </div>
   </>
  )
}

export default Home