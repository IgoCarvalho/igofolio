import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full bg-zinc-900 text-gray-50">
        <div className={`bg-zinc-900 flex justify-center items-start`}>
          <Hero />
        </div>
      </main>
    </>
  );
}
