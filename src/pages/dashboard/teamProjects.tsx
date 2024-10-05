import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import TeamTable from "../../components/Table/Team";
function TeamProjects() {
  return (
    <DashboardLayout>
      <div className="w-full h-full">
        <div className="mt-4 shadow-md rounded-lg bg-white relative">
          <div className="absolute flex items-center justify-between text-xl -translate-x-1/2 left-1/2 top-[-20px] bg-gradient-blue rounded-lg shadow-md text-white w-[95%] h-[4rem] p-4 ">
            <span>Team Projects</span>
          </div>
          <div className="w-full overflow-hidden">
            <TeamTable />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default TeamProjects;
