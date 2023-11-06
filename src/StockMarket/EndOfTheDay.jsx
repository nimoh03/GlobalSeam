import { Descriptions , Progress , Form , Checkbox , Button } from "antd"
import { TagOutlined } from "@ant-design/icons"
const EndOfTheDay = () => {

    const onFinish = (values) => {
        console.log("Success:", values);
      };
    
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
    return(
        <div className="body">
 <div className=" mx-5 w-full sm:w-3/4 overflow-hidden shadow-xl py-5">
        <h4 className="header rounded-t-xl">Run End Of Day</h4>
        <div>   
        <div className="md:p-10 w-4/5 mx-auto my-3">
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
      <div className="flex justify-center">
        <Form onFinish={onFinish}>
        <Form.Item name="reconcile with gl" valuePropName="checked">
              <Checkbox className="mr-5"><Button className="blue">Reconcile With GL</Button></Checkbox>
            </Form.Item>
            <Form.Item name="reconcile with trade" valuePropName="checked">
              <Checkbox><Button className="blue">Reconcile With Trade</Button></Checkbox>
            </Form.Item>
            <Form.Item name="reconcile with portfolio" valuePropName="checked">
              <Checkbox><Button className="blue">Reconcile With Portfolio</Button></Checkbox>
            </Form.Item>
            <Form.Item name="reconcile with trade file" valuePropName="checked">
              <Checkbox><Button>Reconcile With Trade File</Button></Checkbox>
            </Form.Item>
        </Form>
          
          </div>
        <div className="flex justify-end gap-5 px-10">
        <Button className="danger">Cancel</Button>
        <Button className="blue">Run</Button>
        </div>
        </div>
     
       </div>
        </div>
      
    )
}

export default EndOfTheDay