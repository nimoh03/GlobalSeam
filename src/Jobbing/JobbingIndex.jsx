import React, { useState } from "react";
import { Table, Button, Tooltip, Select } from "antd";
import  './JobbingIndex.css'

import ButtonsComponent from "../Component/ButtonsComponent";
import TableComponent from "../Component/TableComponent";


const JobbingIndex = () => {
const name = 'Unapproved Job Order'
const price = 'TXTN T'
const addNew = 'Add New Deposit'
  return (
    <div>
     <ButtonsComponent addNew={addNew} />
     <TableComponent  name={name}  price={price}/>
    </div>
  );
};
export default JobbingIndex;
