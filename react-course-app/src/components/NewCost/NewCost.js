import "./NewCost.css";
import CostForm from "./CostForm";

const NewCost = (props) => {
  const saveCastDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
  };

  return (
    <div className="new-cost">
      <CostForm onSaveCostData={saveCastDataHandler} />
    </div>
  );
};

export default NewCost;
