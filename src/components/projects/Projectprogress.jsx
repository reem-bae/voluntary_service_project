export default function Projectprogres ({ raised, goal }) {
 const percent = Math.min((raised / goal) * 100, 100);

  return (
    <div className="w-full space-y-3">
      <div className="flex justify-between items-end">
        <span className="text-xs font-black uppercase tracking-widest text-gray-400">
            Funding Progress
        </span>
        <span className="text-sm font-bold text-orange-600">
            {percent.toFixed(0)}% funded
        </span>
      </div>

    <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden border border-gray-50 shadow-inner relative">
  <div 
    className="h-full bg-orange-500 transition-all duration-1000 ease-out shadow-sm"
    style={{ 
      width: `${percent}%`,
      backgroundImage: 'linear-gradient(to right, #f97316, #ea580c)'
    }}
  >
    <div className="absolute inset-0 bg-white/20 w-full h-[50%] top-0"></div>
  </div>
</div>
      <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
        <span>Raised: {raised} $</span>
        <span>Goal: {goal} &</span>
      </div>
    </div>
  );
}