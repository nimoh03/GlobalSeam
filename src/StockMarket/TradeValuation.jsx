import { DatePicker, Form, Input, Select, Button } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY/MM/DD";

const TradeValuation = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onChange = (date, dateString) => {
    console.log(dateString);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="body">
      <Form
        onFinish={onFinish}
        className="form-bg rounded-md overflow-hidden m-2 mx-auto shadow-2xl "
      >
        <h4 className="bg-blue-600 p-2 pl-10 text-white font-semibold">
        Transaction Trade Valuation - New
        </h4>
        <div className="p-10">
        <span className="block font-semibold">Date</span>
            <DatePicker
              defaultValue={dayjs("2023/11/04", dateFormat)}
              format={dateFormat}
              onChange={onChange}
            />
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
            <h5 className="text-green-700 font-semibold">
              CSCS A/C: 10113433 | CSCS REG: A909JD334 | Cash Bal: Email:
              abdulazeez@gmail.com | Phone: 08132624118{" "}
            </h5>
          </div>
          <div className="md:grid grid-cols-3 gap-5 my-2">
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
          <div className="md:grid grid-cols-3 gap-10 my-2">
            <div className=" col-span-1">
              <span className="block font-semibold">Quantity</span>
              <Form.Item className="my-2" name="quantity">
                <Input placeholder="Reference" />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <span className="block font-semibold">Consideration</span>
              <Form.Item className="my-2" name="consideration">
                <Input placeholder="Reference" />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <span className="block font-semibold">Transaction Type</span>
              <Form.Item className="my-2" name="transaction type">
                <Input placeholder="Reference" />
              </Form.Item>
            </div>
          </div>
          <div className="grid grid-cols-3 my-2">
          <div className=" col-span-1">
              <span className="block font-semibold">Total Fees</span>
              <Form.Item className="my-2" name="Total Fees">
                <Input placeholder="Reference" />
              </Form.Item>
            </div>
            <div className=" col-span-2">
              <span className="block font-semibold">Total Amount</span>
              <Form.Item className="my-2" name="Total Amount">
                <Input placeholder="Reference" />
              </Form.Item>
            </div>
          </div>
          <div className="md:grid grid-cols-4 mb-10 my-5 gap-5">
            <div className="col-span-2 my-2">
              <Button
                htmlType="submit"
                className="blue"
              >
                View Unapproved job
              </Button>
            </div>
            <div className="col-span-2 my-2">
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
        </div>
      </Form>
    </div>
  );
};

export default TradeValuation