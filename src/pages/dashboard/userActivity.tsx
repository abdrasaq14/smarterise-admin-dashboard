import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import UserTable from "../../components/Table/User";
function UserActivity() {

  return (
    <DashboardLayout>
      <div className="w-full h-full">
        <div className="mt-4 shadow-md rounded-lg bg-white relative">
          <div className="absolute flex items-center justify-between text-xl -translate-x-1/2 left-1/2 top-[-20px] bg-gradient-blue rounded-lg shadow-md text-white w-[95%] h-[4rem] p-4 ">
            <span>User activity</span>
            
          </div>
          <div className="w-full overflow-hidden">
            <UserTable />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default UserActivity;
