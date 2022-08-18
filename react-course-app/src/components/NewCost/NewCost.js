import React, { useState } from "react";
import "./NewCost.css";
import CostForm from "./CostForm";

const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCastDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    setIsFormVisible(false);
  };

  const inputCostDataHamdler = () => {
    setIsFormVisible(true);
  };

  const canselCostHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHamdler}>Add New Expense</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCastDataHandler}
          onCancel={canselCostHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
