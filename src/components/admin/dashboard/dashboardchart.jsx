
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, CartesianGrid } from "recharts";

export default function DashboardChart({ donationsData = [], volunteersData = [], projectsData=[] }) {

  const COLORS = ["#f97316", "#3b82f6", "#10b981", "#8b5cf6", "#f43f5e"];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 text-white p-3 rounded-xl shadow-xl border border-gray-800 text-xs font-bold">
          <p className="mb-1 uppercase tracking-widest opacity-70">{label}</p>
          <p className="text-orange-400">{`${payload[0].name}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8 py-6">
        <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-8 bg-orange-600"></span>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Analytics Overview</h2>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
       
        <div className="bg-white p-6 rounded-4xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-6">
            <h3 className="text-lg font-black text-gray-900">Donations Over Time</h3>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-tight">Monthly contribution tracking</p>
          </div>
          <div className="h-75 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={donationsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#9ca3af', fontSize: 12, fontWeight: 700}} 
                    dy={10}
                />
                <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#9ca3af', fontSize: 12, fontWeight: 700}} 
                />
                <Tooltip content={<CustomTooltip />} cursor={{fill: '#fff7ed'}} />
                <Bar 
                    dataKey="amount" 
                    fill="#f97316" 
                    radius={[6, 6, 0, 0]} 
                    barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>


        <div className="bg-white p-6 rounded-4xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-6">
            <h3 className="text-lg font-black text-gray-900">Volunteer Distribution</h3>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-tight">Engagement by project category</p>
          </div>
          <div className="h-75 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie 
                    data={volunteersData} 
                    dataKey="count" 
                    nameKey="project" 
                    cx="50%" 
                    cy="50%" 
                    innerRadius={70}
                    outerRadius={100} 
                    paddingAngle={5}
                    stroke="none"
                >
                  {volunteersData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                    verticalAlign="bottom" 
                    iconType="circle"
                    formatter={(value) => <span className="text-xs font-bold text-gray-600 uppercase tracking-wider ml-2">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}

