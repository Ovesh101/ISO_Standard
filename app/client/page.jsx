"use client"
import { useSearchParams } from "next/navigation";
import Table from "./components/Table";

const Page = () => {
  // Use the `useSearchParams` hook from `next/navigation` to get query parameters
  const searchParams = useSearchParams();
  const clientName = searchParams.get("name") || "";  // Get the 'name' query parameter, defaulting to an empty string if not found

  return (
    <div className="p-2">
      {/* Pass the query parameter 'name' to the Table component */}
      <Table clientName={clientName} />
    </div>
  );
};

export default Page;
