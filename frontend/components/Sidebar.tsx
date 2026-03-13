import Link from "next/link";

export default function Sidebar() {
  return (
    <div style={{ width: "200px", background: "#eee", padding: "20px" }}>
      <h3>Menu</h3>
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/students">Students</Link></li>
        <li><Link href="/teachers">Teachers</Link></li>
        <li><Link href="/attendance">Attendance</Link></li>
        <li><Link href="/fees">Fees</Link></li>
      </ul>
    </div>
  );
}