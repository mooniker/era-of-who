import { useState, useEffect } from 'react';
import InputForm from './components/InputForm';
import Timeline from './components/Timeline';

export interface PersonData {
  name: string;
  birth: number | null;
  birthMonth: number | null;
  birthDay: number | null;
  death: number | null;
}

function parseUrlParams(): PersonData {
  const sp = new URLSearchParams(window.location.search);
  const birthStr = sp.get('birth');
  const monthStr = sp.get('bm');
  const dayStr = sp.get('bd');
  const deathStr = sp.get('death');
  return {
    name: sp.get('name') || '',
    birth: birthStr ? parseInt(birthStr, 10) : null,
    birthMonth: monthStr ? parseInt(monthStr, 10) : null,
    birthDay: dayStr ? parseInt(dayStr, 10) : null,
    death: deathStr ? parseInt(deathStr, 10) : null,
  };
}

export default function App() {
  const [person, setPerson] = useState<PersonData>(parseUrlParams);

  useEffect(() => {
    const handlePopState = () => setPerson(parseUrlParams());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleChange = (data: PersonData) => {
    const sp = new URLSearchParams();
    if (data.name) sp.set('name', data.name);
    if (data.birth != null) sp.set('birth', String(data.birth));
    if (data.birthMonth != null) sp.set('bm', String(data.birthMonth));
    if (data.birthDay != null) sp.set('bd', String(data.birthDay));
    if (data.death != null) sp.set('death', String(data.death));
    const query = sp.toString();
    window.history.replaceState({}, '', query ? '?' + query : window.location.pathname);
    setPerson(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Era of Who</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">See history through someone's lifetime</p>
        </div>
      </header>
      <main className="max-w-2xl mx-auto px-4 py-8">
        <InputForm initialValues={person} onChange={handleChange} />
        {person.birth != null && <Timeline person={person} />}
      </main>
    </div>
  );
}
