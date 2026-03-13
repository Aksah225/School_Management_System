import Card from "../../components/Card";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Card title="Total Students" value="1200" />
      <Card title="Total Teachers" value="45" />
      <Card title="Total Classes" value="20" />
    </div>
  );
}