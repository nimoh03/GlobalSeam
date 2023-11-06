import AllotmentComponent from "../Component/AllotmentComponent";

const name = "NASD Allotment Posting";
const NasdAllotment = () => {
  return (
    <div className="body">
      <AllotmentComponent name={name} />
    </div>
  );
};

export default NasdAllotment;
