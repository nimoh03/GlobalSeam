import { Table , Button, Tooltip } from "antd"
import { PaperClipOutlined , SyncOutlined} from '@ant-design/icons'

const TradeUploadComponent = (prop) => {
    
const dataSource = [
    {
      key: 1,
     'post date': "25/04/2022",
      'created by': "PINNEK, EMESHIE LTD -  PINN-8081",
    },
  ];
  
    return(
        <div className="m-3">
        <Table
          className="drop-shadow-lg"
          rowKey='key'
          bordered
          title={() => (
            <div >
              <PaperClipOutlined /> {prop.name}
            </div>
          )}
          columns={[
            {
              title: "Post Date", 
              dataIndex: "post date",
              key: 'post date',
            },
            {
              title: "Created By",
              dataIndex: "created by",
              key: 'created by',
              
            },
            {
              title: "Actions",
              key: "actions",
              render: (text, record) => (
                <div className="flex justify-center">
                  <Tooltip title="Reverse">
                    <Button
                      onClick={() => handleEdit(record)}
                      className="p-0 border-0"
                      >
                     <SyncOutlined />
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

export default TradeUploadComponent