import DashboardCard08 from "../partials/dashboard/DashboardCard08";
import DashboardCard09 from "../partials/dashboard/DashboardCard09";

function Dashboard() {
  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          {/* Line chart (Sales Over Time) */}
          <DashboardCard08 />
          {/* Stacked bar chart (Sales VS Refunds) */}
          <DashboardCard09 />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
