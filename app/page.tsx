import { Assets } from "./components/Assets/Assets";

export default async function Home() {
  return (
    <div className="py-10 px-8 max-w-screen-xl mx-auto font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Assets />
      </main>
    </div>
  );
}
