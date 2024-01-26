import SortableTable from "../components/SortableTable";
import SortableTableWithHook from "../components/SortableTableWithHook";
function TablePage() {
  const data = [
    {
      name: "Orange",
      color: "bg-orange-500",
      score: 5,
    },
    {
      name: "Apple",
      color: "bg-red-500",
      score: 3,
    },
    {
      name: "Banana",
      color: "bg-yellow-500",
      score: 1,
    },
    {
      name: "Lime",
      color: "bg-green-500",
      score: 4,
    },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
      // INSIDE SortableTable 根據是否有 sortValue key 決定是否加工 header
      // header: () => <th onClick={doSort()}>Score</th>
    },
  ];

  const keyFn = (data) => data.name;

  return (
    <div>
      <div>
        <h1>Sortable</h1>
        <SortableTable data={data} config={config} keyFn={keyFn} />
      </div>
      <div className="mt-5">
        <h1>SortableWithHook</h1>
        <SortableTableWithHook data={data} config={config} keyFn={keyFn} />
      </div>
    </div>
  );
}

export default TablePage;
