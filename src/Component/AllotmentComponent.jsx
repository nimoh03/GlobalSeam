import { useState } from "react";
import { DatePicker, Radio, Button , Progress } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY/MM/DD";

const AllotmentComponent = (prop) => {
  console.log(prop);
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
 <div className="rounded-lg overflow-hidden 
 w-4/5 md:w-3/5 mx-auto shadow-xl ">
      <h4 className="header">
       {prop.name}
      </h4>
      <div className="p-5  mt-5 mb-11 ">
      <div className="w-full md:w-1/4 mx-auto">
        <span className="block font-semibold my-2">Effective Date   </span>
        <DatePicker
          defaultValue={dayjs("2023/11/04", dateFormat)}
          format={dateFormat}
          onChange={onChange}
          style={{ width: "100%" }}
        />
      </div>
      <div className="md:w-1/4 mx-auto my-3">
        <Radio.Group onChange={onChange} value={value} className=" flex justify-between pl-2">
          <Radio value="floor" className="pl-1">Floor</Radio>
          <Radio value="Remote" >Remote</Radio>
        </Radio.Group>
      </div>
      <div className="md:w-2/4 mx-auto">
      <Progress percent={50} status="active" />
      </div>
      <div className="w-full md:w-1/4 mx-auto flex justify-around md:justify-between my-2">
        <Button className="danger">Cancel</Button>
        <Button className="blue">Post</Button>
      </div>
      <div className="w-full md:w-2/4 mx-auto flex flex-col">
        <Button className="block my-5 blue">Trades Missing In The Jobbing Book</Button>
        <Button className="blue"> Match Trade With The Jobbing Book</Button>
      </div>
      </div>
    </div>
   
   
  );
};

export default AllotmentComponent;
