import Table from "../../components/Table";

export default function Students() {
  const students = [
    { id: 1, name: "Ajit", class: "10" },
    { id: 2, name: "Rahul", class: "9" },
  ];

  return (
    <div>
      <h1>Students</h1>
      <Table data={students} />
    </div>
  );
}