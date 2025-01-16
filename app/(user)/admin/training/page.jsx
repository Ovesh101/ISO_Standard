import TrainingCompo from "./components/TrainingCompo";

const fetchTrainings = async () => {
  try {
    const res = await fetch(`${URL}/training`, {
      cache: "no-store", // Avoid caching for dynamic data
    });

    if (!res.ok) {
      throw new Error(`Error fetching training: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const page = async() => {
  const all_Trainings = await fetchTrainings();
  return (
    <main className="p-5 flex flex-col  gap-5">
      <TrainingCompo all_Trainings={all_Trainings} />
    </main>
  );
};
export default page;
