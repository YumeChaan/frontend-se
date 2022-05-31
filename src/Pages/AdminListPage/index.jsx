import React, {useState,useEffect} from "react";
import AdminDetailsTable from "../../Components/AdminList/AdminDetailsTable/AdminDetailsTable.jsx";
import styled from './index.module.css';
import {adminList} from '../../services/adminServices';
function AdminList() {
    const [records , setRecord] = useState([]);
   
    useEffect(() => {
        async function getAdmin() {
          const result = await adminList();
          setRecord(result.data);
        }
    
        getAdmin();
      });
    
    return (
        <React.Fragment>
            <div className={styled['main-container']}>
            <div className={`container`}>
                <header className={styled['header']}>
                    <h1>Admin List</h1>
                </header>
                <div className={styled['table-holder']}>
                    {records.map((record) => {
                    return (
                        <AdminDetailsTable
                        key={record["id"]}
                        name={record["Name"]}
                        
                        gender={record["gender"]}
                        birthday={record["birthday"]}
                        address={record["address"]}
                        contact={record["mobileNo"]}
                        email={record["email"]}
                        />
                    );
                    })}
                </div>
            </div>
            </div>
        </React.Fragment>
    );
}

export default AdminList;