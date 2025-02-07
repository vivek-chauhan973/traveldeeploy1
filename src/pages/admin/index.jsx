import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import AdminDashboard from "./dashboard";
import Login from "./login";
export default function AdminIndex() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  const page = "Admin";

  const checkLoggedInStatus = () => {
    const userIsLoggedIn = localStorage.getItem("accessToken") !== null;
    setLoggedIn(userIsLoggedIn);
  };

  useEffect(() => {
    checkLoggedInStatus();
    if (!isLoggedIn) {
      // router.push('/login');
    }
  }, [isLoggedIn, router]);

  return (
    <div>
      {isLoggedIn ? <AdminDashboard /> : <Login page={page} />}
      {/* {isLoggedIn ? <AdminDashboard /> : <AdminDashboard />} */}
      <h1></h1>
    </div>
  );
}
