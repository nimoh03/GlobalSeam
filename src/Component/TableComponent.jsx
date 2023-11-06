import {Table , Button , Tooltip} from 'antd' 
import { useState } from 'react'
import {
    DeleteTwoTone,
    PaperClipOutlined,
    EditTwoTone,
    CheckCircleTwoTone,
  } from "@ant-design/icons";
const TableComponent = (prop) => {
    const [selectionType, setSelectionType] = useState("checkbox");

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
      customer: "PINNEK, EMESHIE LTD -  PINN-8081",
      security: "₦10,000,000.00",
      quantity: "PMX09812",
     Price: "10k",
      "txn id": "R",
    },
    {
      key: "2",
      date: "25/04/2022",
      customer: "PINNEK, EMESHIE LTD -  PINN-8081",
      security: "₦10,000,000.00",
      quantity: "PMX09812",
      Price: "10K",
      "txn id": "R",
    },
  ];
    return(
        <div className="mx-3">
        <Table
          className="drop-shadow-2xl"
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          rowKey="key"
          bordered
          title={() => (
            
            <div className='jobheader'>
              <PaperClipOutlined /> {prop.name}
            </div>
          )}
          columns={[
            {
              title: "Date",
              dataIndex: "date",
              key: "date",
            },
            {
              title: "Customer",
              dataIndex: "customer",
              key: "customer",
              
            },
            {
              title: "Security",
              dataIndex: "security",
              key: "security",
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
              key: "quantity",
            },
            {
              title: `${prop.price}`,
              dataIndex: `${prop.price}`,
              key: `${prop.price}`,
            },
            {
              title: "TXN ID",
              dataIndex: "txn id",
              key: "txn id",
            },
            {
              title: "Actions",
              key: "actions",
              width: 150,
              render: (text, record) => (
                <div className="flex justify-center">
                  <Tooltip title="Approve">
                    <Button
                      onClick={() => console.log("hi")}
                      className="p-0 border-0"
                    >
                      <CheckCircleTwoTone />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <Button
                      onClick={() => console.log("hi")}
                      className="p-0 px-3 border-0"
                    >
                      <EditTwoTone />
                    </Button>
                  </Tooltip>
                  <Tooltip title="delete">
                    <Button
                      onClick={() => handleEdit(record)}
                      className="p-0 border-0"
                    >
                      <DeleteTwoTone />
                    </Button>
                  </Tooltip>
                </div>
              ),
            },
          ]}
          dataSource={dataSource}
          scroll={{ x: 728 }}
        ></Table>
      </div>
    )
}

export default TableComponent