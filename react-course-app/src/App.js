import Costs from "./components/Costs/Costs";

const App = () => {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Refrigerator",
      amount: 999.99,
    },
    {
      date: new Date(2021, 11, 25),
      description: "MakBook",
      amount: 1254.72,
    },
    {
      date: new Date(2021, 4, 1),
      description: "Jeense",
      amount: 49.99,
    },
  ];
  return (
    <div>
      <h1>Let's start studying React!</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
