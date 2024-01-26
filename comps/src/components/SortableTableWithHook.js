import Table from "./Table";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import useSort from "../hooks/useSort";

function SortableTable(props) {
  const { data, config } = props;
  const { sortOrder, sortBy, setSortColumn, sortedData } = useSort(data, config);

  const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
      return (
        <div>
          <GoTriangleUp />
          <GoTriangleDown />
        </div>
      );
    }
    if (sortOrder === null) {
      return (
        <div>
          <GoTriangleUp />
          <GoTriangleDown />
        </div>
      );
    } else if (sortOrder == "asc") {
      return (
        <div>
          <GoTriangleUp />
        </div>
      );
    } else {
      return (
        <div>
          <GoTriangleDown />
        </div>
      );
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    // 在 sortable Table 根據 config 是否有加上 sortValue, 決定是否要客製化 header sort view
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  // Only sort data if sortOrder && sortBy are not null
  // Make a copy of the 'data' prop, 不要更動原本的物件
  // Find the correct sort Func ann use it for sorting

  return <Table {...props} data={sortedData} config={updatedConfig} />; // config 會覆蓋原本 props 的 config key
}

export default SortableTable;
