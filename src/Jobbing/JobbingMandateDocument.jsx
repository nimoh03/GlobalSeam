import { Select , DatePicker, Button , Table , Tooltip} from "antd";
import { useState } from "react";
import { PaperClipOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY/MM/DD";


  
const JobbingMandateDocument = () => {

  const rowSelection = {
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };
  

const dataSource = [
  {
    key: "1",
    date: "25/04/2022",
    'document id': "PINNEK, EMESHIE LTD -  PINN-8081",
    'job order id': "AHDJD978",
    'image file name': "PMX09812",
    "txn t": "R",
    remark: "Remark here",
  },
  {
    key: "2",
    date: "25/04/2022",
    'document id': "PINNEK, EMESHIE LTD -  PINN-8081",
    'job order id': "AHDJD978",
    'image file name': "PMX09812",
    "txn t": "R",
    remark: "Remark here",
  },
  {
    key: "3",
    date: "25/04/2022",
    'document id': "PINNEK, EMESHIE LTD -  PINN-8081",
    'job order id': "AHDJD978",
    'image file name': "PMX09812",
    "txn id": "R",
    remark: "Remark here",
  },
   {
    key: "4",
    date: "25/04/2022",
    'document id': "PINNEK, EMESHIE LTD -  bggggggggggggggggggggPINN-8081",
    'job order id': "AHDJD978kkkkkkkkkkkkkk",
    'image file name': "PMX09812",
    "txn t": "fffffffffffffffffR",
    remark: "Remark here",
  },
];

const onChange = (date, dateString) => {
  console.log(dateString);
};

    const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <div className="p-5">
        <div className="rounded-lg overflow-hidden shadow-xl">
        <h4 className="header">
        <PaperClipOutlined /> Job Mandate Document Search
      </h4>
      <div className="grid md:grid-cols-5 gap-5 p-5">  
        <div>
          <span className="block font-semibold">Customer</span>
          <Select
            defaultValue="JOHNSON"
            options={[
              {
                value: "lucy",
                label: "Lucy",
              },
            ]}
            style={{width:'100%'}}
          />
        </div>
        <div>
          <span className="block font-semibold">From</span>
          <DatePicker
              defaultValue={dayjs("2023/11/04", dateFormat)}
              format={dateFormat}
              onChange={onChange}
              style={{width:'100%'}}
            />
        </div>
        <div>
          <span className="block font-semibold">From</span>
          <DatePicker
              defaultValue={dayjs("2023/11/04", dateFormat)}
              format={dateFormat}
              onChange={onChange}
              style={{width:'100%'}}
            />
        </div>
        <div>
          <span className="block font-semibold">Customer</span>
          <Select
            defaultValue="JOHNSON"
            options={[
              {
                value: "lucy",
                label: "Lucy",
              },
            ]}
            style={{width:'100%'}}
          />
        </div>
        <div>
            <br/>
        <Button className="md:ml-10 blue">Search</Button>
      </div>
      </div>
      <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          rowKey="key"
          columns={[
            {
              title: "Date",
              dataIndex: "date",
              key: "date",
            },
            {
              title: "DOCUMENT ID",
              dataIndex: "document id",
              key: "document id",
              
            },
            {
              title: "JOB ORDER ID",
              dataIndex: "job order id",
              key: "job order id",
            },
            {
              title: "IMAGE FILE NAME",
              dataIndex: "image file name",
              key: "image file name",
            },
            {
              title: "TXN ID",
              dataIndex: "txn id",
              key: "txn id",
            },
            {
              title: "REMARK",
              dataIndex: "remark",
              key: "remark",
            },
          ]}
          dataSource={dataSource}
          scroll={{ x: 728 }}
        ></Table>
        </div>
     
    </div>
  );
};

export default JobbingMandateDocument;
