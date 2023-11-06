import { Button , Select} from "antd"
const ButtonsComponent = (props) => {
    
const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };
  
const filterOption = (input, option) =>
(option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return(
        <div className=" flex p-3 gap-3 overflow-auto scrollbar">
        <Button className="text-red-500 font-semibold bg-red-200 outline-none border-none">
          Batch Delete
        </Button>
        <Button className="text-white font-semibold bg-blue-500 outline-none border-none">
          Batch Approve
        </Button>
        <Select
          showSearch
          placeholder="Filter"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          options={[
           {
            value:'user',
            label:'User'
           }
          ]}
        />
        <Button className="text-blue-500 font-semibold bg-blue-100 outline-none border-none">
          View Reversed job
        </Button>
        <Button className="text-blue-500 font-semibold bg-blue-100 outline-none border-none">
          View Approved job
        </Button>
        <Button className="text-white font-semibold bg-blue-500 outline-none border-none">
         {props.addNew}
        </Button>
      </div>
    )
}

export default ButtonsComponent