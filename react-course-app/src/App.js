import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {
  const costs = [
    {
      id: 'c1',
      date: new Date(2021, 2, 12),
      description: "Refrigerator",
      amount: 999.99,
    },
    {
      id: 'c2',
      date: new Date(2021, 11, 25),
      description: "MakBook",
      amount: 1254.72,
    },
    {
      id: 'c3',
      date: new Date(2021, 4, 1),
      description: "Jeense",
      amount: 49.99,
    },
  ];

const addCostHandler = (cost) => {
  console.log(cost);
  console.log('App component');
}

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
