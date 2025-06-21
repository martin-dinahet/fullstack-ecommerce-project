"use server";

import { LogoutButton } from "@/components/logout-button";
import { getCurrentUser } from "@/lib/auth";

const HomeDashboardPage: React.FC = async () => {
  const user = await getCurrentUser();

  return (
    <div>
      <h1>Dashboard Home</h1>
      <LogoutButton />
    </div>
  );
};

export default HomeDashboardPage;
