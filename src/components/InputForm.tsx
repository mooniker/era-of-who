import { useState, useEffect, useRef } from 'react';
import { PersonData } from '../App';

interface Props {
  initialValues: PersonData;
  onChange: (data: PersonData) => void;
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export default function InputForm({ initialValues, onChange }: Props) {
  const [name, setName] = useState(initialValues.name);
  const [birth, setBirth] = useState(initialValues.birth?.toString() ?? '');
  const [birthMonth, setBirthMonth] = useState(initialValues.birthMonth?.toString() ?? '');
  const [birthDay, setBirthDay] = useState(initialValues.birthDay?.toString() ?? '');
  const [death, setDeath] = useState(initialValues.death?.toString() ?? '');

  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => {
    const birthYear = birth ? parseInt(birth, 10) : null;

    if (!birthYear) {
      onChangeRef.current({ name: name.trim(), birth: null, birthMonth: null, birthDay: null, death: null });
      return;
    }
    if (isNaN(birthYear) || birthYear < 1800 || birthYear > new Date().getFullYear()) return;

    const deathYear = death ? parseInt(death, 10) : null;
    if (deathYear != null && (isNaN(deathYear) || deathYear <= birthYear)) return;

    const month = birthMonth ? parseInt(birthMonth, 10) : null;
    const day = birthDay && month ? parseInt(birthDay, 10) : null;

    onChangeRef.current({ name: name.trim(), birth: birthYear, birthMonth: month, birthDay: day, death: deathYear });
  }, [name, birth, birthMonth, birthDay, death]);

  const inputCls = 'w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent';

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name <span className="font-normal text-gray-400 dark:text-gray-500">(optional)</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g. My Grandmother"
            className={inputCls}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Birth Year <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            value={birth}
            onChange={e => setBirth(e.target.value)}
            placeholder="e.g. 1945"
            min="1800"
            max="2025"
            className={inputCls}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Birth Month <span className="font-normal text-gray-400 dark:text-gray-500">(optional)</span>
          </label>
          <select
            value={birthMonth}
            onChange={e => {
              setBirthMonth(e.target.value);
              if (!e.target.value) setBirthDay('');
            }}
            className={inputCls}
          >
            <option value="">— Month —</option>
            {MONTHS.map((m, i) => (
              <option key={m} value={i + 1}>{m}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Birth Day <span className="font-normal text-gray-400 dark:text-gray-500">(optional)</span>
          </label>
          <input
            type="number"
            value={birthDay}
            onChange={e => setBirthDay(e.target.value)}
            placeholder="e.g. 14"
            min="1"
            max="31"
            disabled={!birthMonth}
            className={inputCls + (!birthMonth ? ' opacity-40 cursor-not-allowed' : '')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Death Year <span className="font-normal text-gray-400 dark:text-gray-500">(optional)</span>
          </label>
          <input
            type="number"
            value={death}
            onChange={e => setDeath(e.target.value)}
            placeholder="Leave blank if unknown"
            min="1800"
            max="2100"
            className={inputCls}
          />
        </div>

      </div>
    </div>
  );
}
