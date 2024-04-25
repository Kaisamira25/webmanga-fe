import React from "react";
import Admin from "../../apps/Admin/Admin";
import { useLocation } from "react-router-dom";
import GenresManager from "../../apps/Admin/components/GenresManager";
import GiftsManager from "../../apps/Admin/components/GiftsManager";
import DiscountsManager from "../../apps/Admin/components/DiscountsManager";
import CoversManager from "../../apps/Admin/components/CoversManager";
import PublicationsManager from "../../apps/Admin/components/PublicationsManager";
import TypesManager from "../../apps/Admin/components/TypesManager";
function HomeAdmin() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="flex h-full">
      <Admin />
      {currentPath === "/admin" && <GenresManager />}
      {currentPath === "/admin/genres" && <GenresManager />}
      {currentPath === "/admin/gifts" && <GiftsManager />}
      {currentPath === "/admin/discounts" && <DiscountsManager />}
      {currentPath === "/admin/covers" && <CoversManager />}
      {currentPath === "/admin/publications" && <PublicationsManager />}
      {currentPath === "/admin/types" && <TypesManager />}
    </div>
  );
}

export default HomeAdmin;
