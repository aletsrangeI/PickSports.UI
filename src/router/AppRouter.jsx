import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from "../auth/routes";
import { useChekAuthenticated } from "../hooks/useCheckAuthenticated";
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";

const AppRouter = () => {

  const status = useChekAuthenticated();
  console.log(status);

  return (
    <Routes>

      {
        (status)
          ? <Route path="/*" element={<DashboardRoutes/>}/>
          : <Route path="/auth*" element={<AuthRoutes />} />
      }
    </Routes>
  );
};

export default AppRouter;
