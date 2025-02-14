
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <Head>
        <title>Rezerwacja Stolika</title>
      </Head>
      
      <div className="text-center">
        <h1 className="text-5xl font-bold">Zarezerwuj stolik w naszej restauracji</h1>
        <p className="text-lg text-gray-300 mt-4">Wybierz datę, godzinę i liczbę gości</p>
        <a href="/reservation" className="mt-6 inline-block px-6 py-3 bg-yellow-500 text-black font-bold text-lg rounded-lg hover:bg-yellow-600 transition">
          Zarezerwuj teraz
        </a>
      </div>
    </div>
  );
}
