import { Descriptions,Button } from "antd";
import { TagOutlined, PaperClipOutlined } from "@ant-design/icons";
const items = [
  {
    label: (
      <div className="flex items-center">
        <TagOutlined className="rotate-icon" />
        <span>
        Transaction No
        </span>
        
      </div>
    ),
    children: <h2>00192NCJA</h2>,
  },
  {
    label: (
      <div>
        <TagOutlined className="rotate-icon" />
        Date
      </div>
    ),
    children: "Prepaid",
  },
  {
    label: (
      <div>
        <TagOutlined className="rotate-icon" />
        Product
      </div>
    ),
    children: "18:00:00",
  },
  {
    label: (
      <div>
        <TagOutlined className="rotate-icon" />
        Subsidiary A/C
      </div>
    ),
    children: "18:00:00",
  },
  {
    label: (
      <div>
        <TagOutlined className="rotate-icon" />
        Stock Code
      </div>
    ),
    children: "18:00:00",
  },
  {
    label: (
      <div>
        <TagOutlined className="rotate-icon" />
        Unit Price
      </div>
    ),
    children: "18:00:00",
  },
  {
    label: (
      <div>
        <TagOutlined className="rotate-icon" />
        Quantity
      </div>
    ),
    children: "18:00:00",
  },
  {
    label: (
      <div>
        <TagOutlined className="rotate-icon" />
        Amount
      </div>
    ),
    children: "18:00:00",
  },
  {
    label: (
      <div>
        <TagOutlined className="rotate-icon" />
        Reference No.
      </div>
    ),
    children: "18:00:00",
  },
  {
    label: (
      <div>
        <TagOutlined className="rotate-icon" />
        Trans. Type
      </div>
    ),
    children: "18:00:00",
  },
  {
    label: (
      <div>
        <TagOutlined className="rotate-icon" />
        Submit Medium
      </div>
    ),
    children: "18:00:00",
  },
  {
    label: (
      <div>
        <TagOutlined className="rotate-icon" />
        Date Limit
      </div>
    ),
    children: "18:00:00",
  },
  {
    label: (
      <div>
        <TagOutlined className="rotate-icon" />
        Price Limit
      </div>
    ),
    children: "18:00:00",
  },
  {
    label: (
      <div>
        <TagOutlined className="rotate-icon" />
        Pending order
      </div>
    ),
    children: "18:00:00",
  },
  {
    label: (
      <div>
        <TagOutlined className="rotate-icon" />
        Due Date
      </div>
    ),
    children: "18:00:00",
  },
  {
    label: (
      <div>
        <TagOutlined className="rotate-icon" />
        Broker to Exe.
      </div>
    ),
    children: "18:00:00",
  },
];
const JobbingOderDetail = () => {
  return (
    <>
    <div className="text-center mt-10">
      <h1 className="text-4xl">120,000.00</h1>
      <h5 className="text-sm">job By: Ahmad Rufai</h5>
      <h5 className="text-sm">To: Hassan Isah</h5>
    </div>
     <div className="sm:p-10">
        <div className="rounded-t-lg overflow-hidden shadow-2xl">
        <h4 className="header">  <PaperClipOutlined /> Job Order Detail</h4>
        <div className="md:p-10">
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
        style={{width:'100%'}}
        
      />
       <h5 className="text-green-700 font-semibold p-5">
              CSCS A/C: 10113433 | CSCS REG: A909JD334 | Cash Bal: Email:
              abdulazeez@gmail.com | Phone: 08132624118{" "}
            </h5>
            <div className="w-full flex gap-5 overflow-auto scrollbar py-3 p-2 md:justify-center">
                <Button className="bg-red-200 text-red-700 font-semibold">Delete job</Button>
                <Button className="bg-blue-300 text-blue-700 font-semibold">View Unapproved job</Button>
                <Button  className="bg-blue-300 text-blue-700 font-semibold">Add New job</Button>
                <Button  className="bg-blue-300 text-blue-700 font-semibold">Edit job</Button>
                <Button className="bg-blue-800 text-white font-semibold lg:ml-20">Approve</Button>
            </div>
        </div>
        </div>
    
      
     
    </div>
    </>
   
  );
};

export default JobbingOderDetail;
