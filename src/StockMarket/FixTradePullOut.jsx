import { DatePicker ,  Progress , Button } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY/MM/DD";

const FixTradePullOut = () => {
    const onChange = (date, dateString) => {
        console.log(dateString);
      };
  return (
    <div className="body">
        <div className="w-4/5 md:w-3/5 rounded-lg shadow-2xl overflow-hidden">
        <div>
        <h4 className="header">
          Fix Trade Pull Out- Reversal
        </h4>
      </div>
      <div>
        <h3 className="w-full md:w-2/5 mx-auto my-5 font-bold">Reverse Fix For All Three Dates</h3>
        <div className="w-full md:w-2/5 mx-auto my-5">
        <span className="block font-semibold my-5">Trade Summary Date  </span>
        <DatePicker
          defaultValue={dayjs("2023/11/04", dateFormat)}
          format={dateFormat}
          onChange={onChange}
          style={{ width: "100%" }}
        />
        <span className="block font-semibold my-5">Account Statement  Date  </span>
        <DatePicker
          defaultValue={dayjs("2023/11/04", dateFormat)}
          format={dateFormat}
          onChange={onChange}
          style={{ width: "100%" }}
        />
        <span className="block font-semibold my-5">Portfolio Date  </span>
        <DatePicker
          defaultValue={dayjs("2023/11/04", dateFormat)}
          format={dateFormat}
          onChange={onChange}
          style={{ width: "100%" }}
        />
      </div>
      <div className="md:w-2/4 mx-auto my-5">
      <Progress percent={50} status="active" />
      </div>
      <div className="md:w-2/4 mx-auto flex justify-center gap-5 my-5">
        <Button className="danger">
       Cancel
        </Button>
        <Button className="blue">
       Pull Out
        </Button>
      </div>
      </div>
        </div>
     
    </div>
  );
};

export default FixTradePullOut;
