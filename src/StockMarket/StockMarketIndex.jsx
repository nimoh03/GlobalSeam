
import ButtonsComponent from "../Component/ButtonsComponent";
import TableComponent from "../Component/TableComponent";


const StockMarketIndex = () => {
const name= 'Purchase Trades / Deals'
  const addNew = 'Add New '
  const price ='Price'
  return (
    <div>
    <ButtonsComponent addNew={addNew}/>
    <TableComponent name={name} price={price}/>
     
    </div>
  );
};
export default StockMarketIndex;
