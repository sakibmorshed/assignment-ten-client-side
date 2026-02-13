import { NavLink, Outlet } from "react-router";
import { LayoutDashboard, PlusCircle, ListTodo, User } from "lucide-react";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-base-200 flex">
      {/* Sidebar */}
      <aside className="w-64 hidden md:flex flex-col bg-base-100 shadow-xl">
        <div className="p-6 text-2xl font-bold text-primary">HabitFlow</div>

        <nav className="flex-1 px-4 space-y-2">
          <SidebarLink
            to="/dashboard"
            icon={<LayoutDashboard size={18} />}
            label="Dashboard"
          />
          <SidebarLink
            to="/dashboard/addHabit"
            icon={<PlusCircle size={18} />}
            label="Add Habit"
          />
          <SidebarLink
            to="/dashboard/myHabits"
            icon={<ListTodo size={18} />}
            label="My Habits"
          />
        </nav>
      </aside>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-base-100 shadow px-4 py-3 flex justify-between">
        <h2 className="font-bold text-primary">HabitFlow</h2>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-10 mt-14 md:mt-0">
        <Outlet />
      </main>
    </div>
  );
};

const SidebarLink = ({ to, icon, label }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-lg transition 
       ${isActive ? "bg-primary text-white" : "hover:bg-base-200"}`
    }
  >
    {icon}
    <span className="font-medium">{label}</span>
  </NavLink>
);

export default DashboardLayout;
