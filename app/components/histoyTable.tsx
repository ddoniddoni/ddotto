export default function HistoryTable({ data }) {
  const columns = [
    {
      id: "drwNo",
      name: "회차",
    },
    {
      id: "drwNoDate",
      name: "날짜",
    },
    {
      id: "rank",
      name: "등수",
    },
  ];
  return (
    <table className="border-collapse border border-blue-500 m-auto">
      <thead>
        <tr className="border border-gray-500">
          {columns.map((column) => (
            <th key={column.id} className="border border-gray-500 py-2 px-4">
              {column.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border border-gray-500">
            {columns.map((column) => (
              <td key={column.id} className="border border-gray-500 py-2 px-4">
                {item[column.id]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
