import BuscaSinonimos from "@/components/BuscaSinonimos";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-1 items-center justify-center p-4">
        <BuscaSinonimos />
      </main>
    </div>
  );
}