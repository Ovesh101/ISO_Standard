import AccreditationCompo from "./components/AccreditationCompo";
import {URL} from "@/app/utils/contant"

const fetchAccreditations = async () => {
  try {
    const res = await fetch(`${URL}/accredation`, {
      cache: "no-store", // Avoid caching for dynamic data
    });

    if (!res.ok) {
      throw new Error(`Error fetching accreditations: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Page = async () => {
  const all_Accreditations = await fetchAccreditations();

  return (
    <main className="p-5 flex flex-col gap-5">
      <AccreditationCompo all_Accreditations={all_Accreditations} />
    </main>
  );
};

export default Page;
