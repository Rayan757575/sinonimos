import BuscaSinonimos from "@/components/BuscaSinonimos";
import Header from '@/components/Header' 
export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <BuscaSinonimos />
      </main>
    </div>
  );
}
