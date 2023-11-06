import { DatePicker, Form, Input, Select, Button } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY/MM/DD";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onChange = (date, dateString) => {
  console.log(dateString);
};
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const JobbingOrdersEditx = () => {
  return (
    <div>
      <Form
        onFinish={onFinish}
        title="My Form Header"
        name="myForm"
        className="md:w-3/5 rounded-md overflow-hidden m-2 mx-auto shadow-2xl form-bg"
      >
        <h4 className="header">
          Job Orders(Mandate) - Edit
        </h4>
        <div className="px-5">
          {/* date input */}
          <div className="mt-5 md:grid grid-cols-3 gap-2">
            <div className="col-span-1">
              <span className="block font-semibold">Transaction No.</span>
              <Form.Item name="transaction no">
                <Input placeholder="0001" />
              </Form.Item>
            </div>
            <div className="col-span-1">
            <span className="block font-semibold">Date</span>
            <DatePicker
              defaultValue={dayjs("2023/11/04", dateFormat)}
              format={dateFormat}
              onChange={onChange}
              style={{width:'100%'}}
            />
            </div>
           
          </div>
          {/* date input */}

          {/* Product and subsidiary input */}
          <div className="my-2">
            <div className="md:grid grid-cols-3 gap-5">
              <div className="col-span-1">
                <span className="block font-semibold">Product</span>
                <Select
                  className="w-full"
                  defaultValue="001"
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
                <span className="block font-semibold">Subsidiary Account</span>
                <Select
                  className="w-full"
                  defaultValue="00059088 |  Abdulazeez"
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
            <h3 className="text-green-700 font-semibold">
              CSCS A/C: 10113433 | CSCS REG: A909JD334 | Cash Bal: Email:
              abdulazeez@gmail.com | Phone: 08132624118{" "}
            </h3>
          </div>
          {/* Product and subsidiary input */}

          {/* Stock Code And Unit price input */}
          <div className="md:grid grid-cols-3 gap-5">
            <div className="col-span-2">
              <span className="block font-semibold">Stock Code</span>
              <Select
                className="w-full my-2"
                defaultValue="Cash"
                onChange={handleChange}
                options={[
                  {
                    value: "00059088 |  Abdulazeez",
                    label: "00059088 |  Abdulazeez",
                  },
                ]}
              />
            </div>
            <div className="col-span-1">
              <span className="block font-semibold">Unit Price</span>
              <Form.Item className="my-2">
                <Input placeholder="9000" />
              </Form.Item>
            </div>
          </div>
          {/* Stock Code And Unit price input */}

          {/* Quantity Amount Ref No input */}
          <div className="md:grid grid-cols-3 gap-10">
            <div className=" col-span-1">
              <span className="block font-semibold">Quantity</span>
              <Form.Item className="my-2" name="quantity">
                <Input placeholder="Reference" />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <span className="block font-semibold">Amount</span>
              <Form.Item className="my-2" name="amount">
                <Input placeholder="Reference" />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <span className="block font-semibold">Ref No.</span>
              <Form.Item className="my-2" name="ref no">
                <Input placeholder="Reference" />
              </Form.Item>
            </div>
          </div>
          {/* Quantity Amount Ref No input */}
          {/* Transaction Type and Cross Deal Selling Customer */}
          <div className="md:grid grid-cols-3 gap-5 mb-5">
            <div className="col-span-2">
              <span className="block font-semibold">Transaction type</span>
              <Select
                className="w-full"
                defaultValue="Buy | Sell | Crossdeal"
                onChange={handleChange}
                options={[
                  {
                    value: "00059088 |  Abdulazeez",
                    label: "00059088 |  Abdulazeez",
                  },
                ]}
              />
            </div>
            <div className="col-span-1">
              <span className="block font-semibold">
                Cross Deal Selling Customer
              </span>
              <Select
                className="w-full "
                defaultValue="Cash"
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
          {/* Transaction Type and Cross Deal Selling Customer */}
          {/* Submit Medium Date Limit Price Limit */}
          <div className="md:grid grid-cols-3 gap-10">
            <div className=" col-span-1">
              <span className="block font-semibold">Submit Medium</span>
              <Select
                className="w-full my-2"
                defaultValue="Sterlying Bank 0201"
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
              <span className="block font-semibold"> Date Limit</span>
              <DatePicker
                className="my-2"
                style={{ width: "100%" }}
                defaultValue={dayjs("2023/11/04", dateFormat)}
                format={dateFormat}
                onChange={onChange}
              />
            </div>
            <div className="col-span-1">
              <span className="block font-semibold">Price Limit</span>
              <Form.Item className="my-2">
                <Input placeholder="Reference" />
              </Form.Item>
            </div>
          </div>
          {/* Submit Medium Date Limit Price Limit */}
          {/* Pending Order due amount broker to execute */}
          <div className="md:grid grid-cols-3 gap-10 mt-2 mb-7">
            <div className=" col-span-1">
              <span className="block font-semibold">Pending Order</span>
              <Form.Item className="my-2" name="pending order">
                <Input placeholder="Reference" />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <span className="block font-semibold">Due Amount</span>
              <Form.Item className="my-2" name="due amount">
                <Input placeholder="Reference" />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <span className="block font-semibold">Broker To Execute</span>
              <Select
                className="w-full"
                defaultValue="Sterlying Bank 0201"
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
          {/* Pending Order due amount broker to execute */}
          {/* buttons */}
          <div className="md:grid grid-cols-4 mb-10">
            <div className="col-span-2">
              <Button
                htmlType="submit"
                className="blue font-semibold"
              >
                View Unapproved job
              </Button>
            </div>
            <div className="col-span-2">
              <div className="flex md:justify-center gap-7">
                <Button
                  htmlType="submit"
                  className="danger font-semibold"
                >
                  Cancel
                </Button>
                <Button
                  htmlType="submit"
                  className="blue font-semibold"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
          {/* buttons */}
        </div>
      </Form>
    </div>
  );
};

export default JobbingOrdersEditx;
