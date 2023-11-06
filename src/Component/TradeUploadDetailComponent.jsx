import { Descriptions ,  Progress , Button } from 'antd'
import { TagOutlined } from "@ant-design/icons";
const TradeUploadDetailComponent = (props) => {
    const items = [
        {
          label: (
            <div className="flex items-center">
              <TagOutlined className="rotate-icon" />
              <span>
              Posted Date
              </span>
              
            </div>
          ),
          children: <h2>30/10/2023</h2>,
        },
    ]
  return (
 <div className="rounded-lg overflow-hidden w-full md:w-3/5 mx-auto shadow-2xl m-2">
      <h4 className="blue p-2 pl-10">
       {props.name}
      </h4>
      <div className='py-10 px-2'>
      <div className="md:p-10 w-4/5 mx-auto">
        <Descriptions
        bordered
        column={{
          xs: 2,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 2,
          xxl: 2,
        }}
        items={items}
        
      />
      </div>
      <div className="md:w-2/4 mx-auto">
      <Progress percent={50} status="active" />
      </div>
      <div className="md:w-2/4 mx-auto flex justify-around my-5">
        <Button className='blue'>
        View Approved Trade Upload
        </Button>
        <Button className='blue'>
        Reverse
        </Button>
      </div>
      </div>
     
  </div>


   
  );
};

export default TradeUploadDetailComponent;
