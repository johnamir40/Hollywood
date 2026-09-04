import { Outlet } from "react-router";

export default function LoginLayout() {
  return (
    <div className="overflow-hidden w-full h-dvh">
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
