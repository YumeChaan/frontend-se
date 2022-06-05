import React from 'react';

import MemberProfile from '../../Components/MemberProfile/MmeberProfile';

import styled from './index.module.css';

function MemberProfilePage(){

    const account_details = {
        id: "121212X",
        name: "Amal",
        address: "Colombo",
        contact_no: "0771212123",
        email: "amalr@gmail.com",
        dob: "2012-12-12"
    }

    return(
        <main>
            <div className={`container ${styled["main-container"]}`}>
            <MemberProfile
                id={account_details['id']}
                name={account_details['name']}
                address={account_details['address']}
                contact_no={account_details['contact_no']}
                email={account_details['email']}
                dob={account_details['dob']}
            />
            </div>
            
        </main>
    );
}

export default MemberProfilePage;