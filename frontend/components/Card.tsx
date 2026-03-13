export default function Card({ title, value }: any) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      margin: "10px",
      display: "inline-block"
    }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}