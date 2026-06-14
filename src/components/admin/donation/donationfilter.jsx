/* export default function DonationFilter({ donations, setFiltered }) {
  function handleType(type) {
    if (type === "all") {
      setFiltered(donations);
    } else {
      setFiltered(donations.filter(d => d.type === type));
    }
  }

  return (
    <div className="flex gap-4 mb-4">
      <button onClick={() => handleType("all")}>All</button>
      <button onClick={() => handleType("onetime")}>One-time</button>
      <button onClick={() => handleType("monthly")}>Monthly</button>
    </div>
  );
} */
