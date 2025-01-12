"use client";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamically import the Table component without SSR
const Table = dynamic(() => import("./components/Table"), { ssr: false });

const Page = () => {
  const searchParams = useSearchParams();
  const clientName = searchParams.get("name") || "";  // Get the 'name' query parameter

  return (
    <div className="p-2">
      {/* Pass the query parameter 'name' to the Table component */}
      <Table clientName={clientName} />
    </div>
  );
};

export default Page;
