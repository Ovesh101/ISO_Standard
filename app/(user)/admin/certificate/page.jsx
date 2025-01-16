// This is a Server Component (no 'use client' directive needed)

import { URL } from "@/app/utils/contant";
import CertificateCompo from "./components/CertificateCompo";

const fetchCertificate = async () => {
  try {
    const res = await fetch(`${URL}/certificate` ,{cache:"no-cache"});

    if (!res.ok) {
      throw new Error(`Error fetching certificate: ${res.statusText}`);
    }

    const data = await res.json(); // Parse the response data
    return data; // Return the data to be used in the component
  } catch (error) {
    console.error("Error fetching certificates:", error);
    return []; // Return an empty array if there's an error
  }
};

// This is the main page component
const Page = async () => {
  const allCertificate = await fetchCertificate(); // Server-side fetching

  return (
    <main className="p-5 flex flex-col gap-5">
      <CertificateCompo all_Certificate={allCertificate} />
    </main>
  );
};

export default Page;
