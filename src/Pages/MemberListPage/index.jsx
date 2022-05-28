import React from "react";
import MemberDetailsTable from "../../Components/MemberList/MemberDetailsTable/MemberDetailsTable.jsx";
import styled from './index.module.css';

function MemberList() {
    const records = [
        {
            id: "ID",
            name: "Name",
            age: "Age",
            gender: "Gender",
            birthday: "Birthday",
            address: "Address",
            contact: "Contact Number",
            email: "Email"

        },
        {
            id: 111,
            name: "Chanu",
            age: 23,
            gender: "Female",
            birthday: "1998-12-12",
            address: "Pawani, Meda Mawatha, Ella Road, Kurundugaha, Elpitiya.",
            contact: "0789675634",
            email: "chanmahaarachchi@gmail.com"
        },
        {
            id: "ID",
            name: "Mahaarachchi",
            age: 25,
            gender: "Male",
            birthday: "1997-12-12",
            address: "Piyumi, Meda Mawatha, Ella Road, Kurundugaha, Elpitiya.",
            contact: "0767806547",
            email: "piyumimahaarachchi@gmail.com"
        },
    ];
    return (
        <React.Fragment>
            <div className={`container`}>
                <header className={styled['header']}>
                    <h1>Member List</h1>
                </header>
                <div className={styled['table-holder']}>
                    {records.map((record) => {
                    return (
                        <MemberDetailsTable
                        key={record["id"]}
                        name={record["name"]}
                        age={record["age"]}
                        gender={record["gender"]}
                        birthday={record["birthday"]}
                        address={record["address"]}
                        contact={record["contact"]}
                        email={record["email"]}
                        />
                    );
                    })}
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default MemberList;