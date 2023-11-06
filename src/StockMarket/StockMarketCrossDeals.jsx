import { DatePicker, Button, Checkbox, Form, Input, Select } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY/MM/DD";

const StockMarketCrossDeals = () => {
  const onFinish1 = (values) => {
    console.log("Success:", values);
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChange = (date, dateString) => {
    console.log(dateString);
  };

  return (
    <div className="rounded-lg m-4 overflow-hidden shadow-2xl">
      <h4 className="header">
        Cross Deal Trades / Deals - New
      </h4>
      <div className="px-3 sm:px-14 py-5 form-bg">
        <Form onFinish={onFinish1} className="form-bg">
          <div className="grid md:grid-cols-3 gap-5">
            <div className="col-span-1">
              <span className="block font-semibold">Date</span>
              <DatePicker
                defaultValue={dayjs("2023/11/04", dateFormat)}
                format={dateFormat}
                onChange={onChange}
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-span-1">
              <span className="block font-semibold">Ticket</span>
              <Form.Item name="ticket">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <span className="block font-semibold">Branch</span>
              <Select
                className="w-full"
                defaultValue="Lagos"
                onChange={handleChange}
                options={[
                  {
                    value: "001",
                    label: "001",
                  },
                ]}
              />
            </div>
          </div>
          <div>
            <div className="md:grid grid-cols-3 gap-5">
              <div className="col-span-1">
                <span className="block font-semibold">
                  Buyer Product Account
                </span>
                <Select
                  className="w-full"
                  defaultValue="JOHNSON"
                  onChange={handleChange}
                  options={[
                    {
                      value: "001",
                      label: "001",
                    },
                  ]}
                />
              </div>
              <div className="col-span-2">
                <span className="block font-semibold">
                  Buyer Subsidiary Account
                </span>
                <Select
                  className="w-full"
                  defaultValue="JOHNSON"
                  onChange={handleChange}
                  options={[
                    {
                      value: "00059088 |  Abdulazeez",
                      label: "00059088 |  Abdulazeez",
                    },
                  ]}
                />
              </div>
            </div>
            <h5 className="text-green-700 font-semibold">
              CSCS A/C: 10113433 | CSCS REG: A909JD334 | Cash Bal: Email:
              abdulazeez@gmail.com | Phone: 08132624118{" "}
            </h5>
          </div>
          <div>
            <div className="md:grid grid-cols-3 gap-5">
              <div className="col-span-1">
                <span className="block font-semibold">
                  Seller Product Account
                </span>
                <Select
                  className="w-full"
                  defaultValue="JOHNSON"
                  onChange={handleChange}
                  options={[
                    {
                      value: "001",
                      label: "001",
                    },
                  ]}
                />
              </div>
              <div className="col-span-2">
                <span className="block font-semibold">
                  Selller Subsidiary Account
                </span>
                <Select
                  className="w-full"
                  defaultValue="JOHNSON"
                  onChange={handleChange}
                  options={[
                    {
                      value: "00059088 |  Abdulazeez",
                      label: "00059088 |  Abdulazeez",
                    },
                  ]}
                />
              </div>
            </div>
            <h5 className="text-green-700 font-semibold">
              CSCS A/C: 10113433 | CSCS REG: A909JD334 | Cash Bal: Email:
              abdulazeez@gmail.com | Phone: 08132624118{" "}
            </h5>
          </div>
          <div>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="col-span-1">
                <span className="block font-semibold">Stock Code</span>
                <Select
                  className="w-full"
                  defaultValue="Lagos"
                  onChange={handleChange}
                  options={[
                    {
                      value: "001",
                      label: "001",
                    },
                  ]}
                />
              </div>
              <div className="col-span-1">
                <span className="block font-semibold">Quantity</span>
                <Form.Item name="quantity">
                  <Input placeholder="2342324"  />
                </Form.Item>
              </div>
              <div className="col-span-1">
                <span className="block font-semibold">Price</span>
                <Form.Item name="price">
                  <Input placeholder="2342324"  />
                </Form.Item>
              </div>
            </div>
            <h5 className="text-green-700 font-semibold">
              CSCS A/C: 10113433 | CSCS REG: A909JD334 | Cash Bal: Email:
              abdulazeez@gmail.com | Phone: 08132624118{" "}
            </h5>
          </div>
          <div className="grid md:grid-cols-6 gap-5">
            <div className="col-span-2">
              <span className="block font-semibold">Consideration</span>
              <Form.Item name="consideration">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>
            <div className="col-span-2">
              <span className="block font-semibold">Bought By</span>
              <Select
                className="w-full"
                defaultValue="JOHNSON"
                onChange={handleChange}
                options={[
                  {
                    value: "001",
                    label: "001",
                  },
                ]}
              />
            </div>
            <div className="col-span-1">
              <span className="block font-semibold">Sold By</span>
              <Form.Item name="sold by">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <span className="block font-semibold">No Of Transac</span>
              <Form.Item name="no of transac">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>
          </div>  
        {/* </Form> */}
        {/* <Form onFinish={onFinish2} className="form-bg"> */}

       
        <h4 className="header" style={{textAlign:'center'}}>
        Buyer Charges & Gross Amount
      </h4>
      <div className="grid md:grid-cols-5 gap-5 py-5">
            <div className="col-span-1">
              <span className="block font-semibold">SEC</span>
              <Form.Item name="sec">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>{" "}
            <div className="col-span-1">
              <span className="block font-semibold">Comm VAT</span>
              <Form.Item name="comm vat">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>{" "}
            <div className="col-span-1">
              <span className="block font-semibold">Stamp</span>
              <Form.Item name="stamp">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>{" "}
            <div className="col-span-1">
              <span className="block font-semibold">NSE</span>
              <Form.Item name="nse">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>{" "}
            <div className="col-span-1">
              <span className="block font-semibold">Commission</span>
              <Form.Item name="commission">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>
          </div>
          <div className="grid md:grid-cols-5 gap-5">
            <div className="col-span-1">
              <span className="block font-semibold">CSCS</span>
              <Form.Item name="cscs">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>{" "}
            <div className="col-span-1">
              <span className="block font-semibold">SEC VAT</span>
              <Form.Item name="sec vat">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>{" "}
            <div className="col-span-1">
              <span className="block font-semibold">NSE VAT</span>
              <Form.Item name="nse vat">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>{" "}
            <div className="col-span-1">
              <span className="block font-semibold">CSCS VAT</span>
              <Form.Item name="cscs vat">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>{" "}
            <div className="col-span-1">
              <span className="block font-semibold">SMS ALERT</span>
              <Form.Item name="sms alert">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>
          </div>
          <div className="grid md:grid-cols-5 gap-5">
            <div className="col-span-1">
              <span className="block font-semibold">ALERT VAT</span>
              <Form.Item name="alert vat">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <span className="block font-semibold">TOTAL</span>
              <Form.Item name="total">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>
          </div>
          
        {/* </Form> */}
        {/* <Form onFinish={onFinish3} className="form-bg"> */}

       
        <h4 className="header rounded-t-lg" style={{textAlign:'center'}}>
        Seller Charges & Net Amount
      </h4>
      <div className="grid md:grid-cols-5 gap-5 py-5">
            <div className="col-span-1">
              <span className="block font-semibold">SEC</span>
              <Form.Item name="sec">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>{" "}
            <div className="col-span-1">
              <span className="block font-semibold">Comm VAT</span>
              <Form.Item name="comm vat">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>{" "}
            <div className="col-span-1">
              <span className="block font-semibold">Stamp</span>
              <Form.Item name="stamp">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>{" "}
            <div className="col-span-1">
              <span className="block font-semibold">NSE</span>
              <Form.Item name="nse">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>{" "}
            <div className="col-span-1">
              <span className="block font-semibold">Commission</span>
              <Form.Item name="commission">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>
          </div>
          <div className="grid md:grid-cols-5 gap-5">
            <div className="col-span-1">
              <span className="block font-semibold">CSCS</span>
              <Form.Item name="cscs">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>{" "}
            <div className="col-span-1">
              <span className="block font-semibold">SEC VAT</span>
              <Form.Item name="sec vat">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>{" "}
            <div className="col-span-1">
              <span className="block font-semibold">NSE VAT</span>
              <Form.Item name="nse vat">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>{" "}
            <div className="col-span-1">
              <span className="block font-semibold">CSCS VAT</span>
              <Form.Item name="cscs vat">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>{" "}
            <div className="col-span-1">
              <span className="block font-semibold">SMS ALERT</span>
              <Form.Item name="sms alert">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>
          </div>
          <div className="grid md:grid-cols-5 gap-5">
            <div className="col-span-1">
              <span className="block font-semibold">ALERT VAT</span>
              <Form.Item name="alert vat">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <span className="block font-semibold">TOTAL</span>
              <Form.Item name="total">
                <Input placeholder="2342324"  />
              </Form.Item>
            </div>
          </div>
       
        <div className="flex">
            <Form.Item name="auto post" valuePropName="checked">
              <Checkbox className="mr-5">Auto Post</Checkbox>
            </Form.Item>
            <Form.Item name="unsaved reversal" valuePropName="checked">
              <Checkbox>Unsaved Reversal</Checkbox>
            </Form.Item>
          </div>
          <div className="flex md:justify-between gap-5">
            <div>
            <Button className=" blue">View Unapproved Job Order</Button>
            </div>
            <div>
            <Button htmlType="reset" className="danger mx-1 md:mx-5">Cancel</Button>
            <Button htmlType="submit" className="blue">Submit</Button>
            </div>
            
           
          </div>
        </Form>
      </div>
    </div>
  );
};

export default StockMarketCrossDeals;
