import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

const AdminDashboard = lazy(() => import("../modules/admin/dashboard"));
const UserDashboard = lazy(() => import("../modules/user/dashboard"));
const VendorDashboard = lazy(() => import("../modules/vendor/dashboard"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>

          {/* Public */}
          <Route path="/login" element={<Login />} />

          {/* Admin */}
          <Route element={<ProtectedRoute />}>
            <Route element={<RoleRoute role="admin" />}>
              <Route path="/admin/*" element={<AdminDashboard />} />
            </Route>
          </Route>

          {/* User */}
          <Route element={<ProtectedRoute />}>
            <Route element={<RoleRoute role="user" />}>
              <Route path="/user/*" element={<UserDashboard />} />
            </Route>
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}