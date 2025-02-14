
import { useState } from 'react';

export default function Reservation() {
  const [form, setForm] = useState({ name: '', phone: '', guests: 1, date: '', time: '', duration: 1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (response.ok) alert('Rezerwacja wysłana!');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <h2 className="text-3xl font-bold">Formularz rezerwacji</h2>
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 mt-6">
        <input type="text" name="name" placeholder="Imię i nazwisko" required className="w-full p-3 mb-3 bg-gray-700 rounded" onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Numer telefonu" required className="w-full p-3 mb-3 bg-gray-700 rounded" onChange={handleChange} />
        <input type="date" name="date" required className="w-full p-3 mb-3 bg-gray-700 rounded" onChange={handleChange} />
        <input type="time" name="time" required className="w-full p-3 mb-3 bg-gray-700 rounded" onChange={handleChange} />
        <select name="guests" className="w-full p-3 mb-3 bg-gray-700 rounded" onChange={handleChange}>
          <option value="1">1 osoba</option>
          <option value="2">2 osoby</option>
          <option value="3">3 osoby</option>
          <option value="4">4 osoby</option>
        </select>
        <select name="duration" className="w-full p-3 mb-3 bg-gray-700 rounded" onChange={handleChange}>
          <option value="1">1 godzina</option>
          <option value="2">2 godziny</option>
          <option value="3">3 godziny</option>
        </select>
        <button type="submit" className="w-full bg-yellow-500 text-black font-bold p-3 rounded hover:bg-yellow-600 transition">
          Zarezerwuj
        </button>
      </form>
    </div>
  );
}
