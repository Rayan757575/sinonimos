import BuscaSinonimos from "@/components/BuscaSinonimos";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center p-4">
        <BuscaSinonimos />
      </main>
    </div>
  );
}
