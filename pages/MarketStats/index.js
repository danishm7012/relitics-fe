import React from 'react';
import Dashnav from '../../Component/Dashnav';
import SecondNavbar from '../../Component/secondNavbar';
import Sidebar from '../../Component/SideNavbar';
import Market from '../../Component/Market'
import withAuth from '../../Component/Auth'

const MarketStats = ()=> {
    
    return (
        <div>
            <div className="d-inline-flex w-100">
                <Sidebar />
                <div style={{ width: "inherit" }}>
                    <Dashnav />
                    <SecondNavbar />
                    <div className='container mx-auto p-4'>
                        <Market />
                    </div>
                </div>
            </div>
        </div >
    )
}
export default withAuth(MarketStats)
