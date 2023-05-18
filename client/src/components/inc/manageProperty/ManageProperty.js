import "../recom_apartments/Card.css"
import "./ManageProperty.css"
import { useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Card from "../recom_apartments/Card";

const ManageProperty = () => {
    const [activeTab, setActiveTab] = useState('Tenant');

    const handleTabClick = (tabName) => {
        
        setActiveTab(tabName);
    };

    return (
        <div>
            <h1 className="title">Your Homes</h1>
            <div className="tab-container">
                <button
                    className={`tab-button ${activeTab === 'Tenant' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tenant')}
                >
                    Tenant
                </button>
                <button
                    className={`tab-button ${activeTab === 'Landlord' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Landlord')}
                >
                    Landlord
                </button>
            </div>

            {activeTab === 'Tenant' &&
                <div className="rentHomes">
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6} lg={4}>
                            <Link to='/manage-rental/dashboard'>
                                <Card
                                    src="https://a0.muscache.com/im/pictures/miso/Hosting-717383292590854818/original/b7582c33-4bc8-4247-bafd-f9f7a23fe471.jpeg?im_w=720"
                                    title="101 San Fernando"
                                    address="100 N Santa Clara St, San Jose, CA 95126"
                                    beds="2 Beds"
                                />
                            </Link>
                        </Grid>
                    </Grid>
                </div>}
            {activeTab === 'Landlord' &&
                <div className="rentHomes">
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6} lg={4}>
                            <Link to='/manage-rental/dashboard'>
                                <Card
                                    src="https://a0.muscache.com/im/pictures/miso/Hosting-740807800483774592/original/6491cdaf-0dfa-46ad-b93a-a3f05382cbb1.jpeg?im_w=720"
                                    address="181 E Santa Clara St, San Jose, CA 95113"
                                    title="Avalon On the Alameda"
                                    beds="2 Beds"
                                />
                            </Link>
                        </Grid>
                    </Grid>
                </div>}
        </div>
    );
};


export default ManageProperty;

// const a = [1, 2, 3, 4, 5]
// {a.map(i => {
//     return (
//     );
// })}