import { Outlet } from "react-router-dom";

export default function ProjectsLayout() {
  return (
    <div className="flex flex-col min-h-[95vh] bg-orange-500">
      <Outlet />
    </div>
  );
}
