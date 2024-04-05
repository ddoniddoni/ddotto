export default function HistoryTable({ data }) {
  const tableData = data.map((d: {}) => {
    return {
      ...d,
      balls: d["balls"].join(", "),
    };
  });
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
      id: "balls",
      name: "당첨번호",
    },
    {
      id: "bnusNo",
      name: "보너스번호",
    },
    {
      id: "matchedText",
      name: "번호일치",
    },
    {
      id: "rank",
      name: "등수",
    },
  ];
  return (
    <table className="bg-gray-800 w-full">
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
        {tableData.map((item: {}, index: number) => (
          <tr key={index} className="border border-gray-500">
            {columns.map((column) => (
              <td
                key={column.id}
                className="border text-center border-gray-500 p-5"
              >
                {item[column.id]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
