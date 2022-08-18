import CostItem from "./CostItem";
import "./CostsList.css";

const CostsList = (props) => {
  if (props.costs.length === 0) {
    return <h2 className="const-list__fallback">This Year No Costts</h2>;
  }

  return (
    <ul className="cost-list">
      {props.costs.map((cost) => (
        <CostItem
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
          key={cost.id}
        />
      ))}
    </ul>
  );
};

export default CostsList;
