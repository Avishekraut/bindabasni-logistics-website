import { redirect } from "next/navigation";

export default function DashboardPage() {
  redirect("/dashboard/create-order");

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-foreground">
        Welcome to Dashboard
      </h1>
      <p className="text-muted-foreground mt-2">
        Select an option from the sidebar to get started.
      </p>
    </div>
  );
}
