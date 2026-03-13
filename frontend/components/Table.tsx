export default function Table({ data }: any) {
  return (
    <table border={1}>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row: any, index: number) => (
          <tr key={index}>
            {Object.values(row).map((value: any, i) => (
              <td key={i}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}