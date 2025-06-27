import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', uv: 400 },
  { name: 'Feb', uv: 700 },
  { name: 'Mar', uv: 300 },
  { name: 'Apr', uv: 800 },
];

function Dashboard() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Dashboard Overview</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#6366F1" />
      </LineChart>
    </div>
  );
}
export default Dashboard;
