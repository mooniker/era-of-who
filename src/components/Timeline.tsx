import { useState } from 'react';
import { PersonData } from '../App';
import { EVENTS, CATEGORY_LABELS, CATEGORY_STYLES, Category } from '../data/events';

// Age at mid-year (Jul 1) of eventYear — best estimate when event date is unknown.
function ageAtMidYear(eventYear: number, person: PersonData): number {
  const { birth, birthMonth, birthDay } = person;
  if (birth == null) return 0;
  const raw = eventYear - birth;
  if (birthMonth == null) return raw;
  // Has birthday fallen by Jul 1?
  const passedMidYear = birthMonth < 7 || (birthMonth === 7 && (birthDay ?? 1) <= 1);
  return passedMidYear ? raw : raw - 1;
}

interface Props {
  person: PersonData;
}

export default function Timeline({ person }: Props) {
  const { name, birth, death } = person;
  const [copied, setCopied] = useState(false);

  if (birth == null) return null;

  const currentYear = new Date().getFullYear();
  const endYear = death ?? currentYear;
  const lifespan = endYear - birth;

  const events = EVENTS
    .filter(e => e.year >= birth && e.year <= endYear)
    .sort((a, b) => a.year - b.year);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayName = name || 'This person';

  return (
    <div>
      {/* Header */}
      <div className="flex items-start justify-between mb-5 gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {name ? `${name}'s Timeline` : 'Timeline'}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            Born {birth}
            {death
              ? ` · Died ${death} · Lived ${lifespan} years`
              : ` · ${ageAtMidYear(currentYear, person)} in ${currentYear}`}
            {' · '}
            {events.length} events
          </p>
        </div>
        <button
          onClick={handleCopy}
          className="shrink-0 text-xs px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          {copied ? 'Copied!' : 'Share link'}
        </button>
      </div>

      {/* Category legend */}
      <div className="flex flex-wrap gap-1.5 mb-7">
        {(Object.keys(CATEGORY_LABELS) as Category[]).map(cat => (
          <span
            key={cat}
            className={`text-xs px-2 py-0.5 rounded-full font-medium ${CATEGORY_STYLES[cat].badge}`}
          >
            {CATEGORY_LABELS[cat]}
          </span>
        ))}
      </div>

      {events.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">No events found within this lifetime.</p>
      ) : (
        <div className="relative ml-24 border-l-2 border-gray-200 dark:border-gray-700">
          {events.map((event, i) => {
            const age = ageAtMidYear(event.year, person);
            const styles = CATEGORY_STYLES[event.category];
            return (
              <div key={`${event.year}-${i}`} className="relative pl-6 pb-7">
                <div
                  className={`absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-gray-950 shadow ${styles.dot}`}
                />

                <div className="absolute -left-24 top-0.5 w-20 text-right">
                  <div className="text-xs font-bold text-gray-700 dark:text-gray-300">{event.year}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">age {age}</div>
                </div>

                <div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${styles.badge}`}>
                    {CATEGORY_LABELS[event.category]}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-1.5">{event.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{event.description}</p>
                </div>
              </div>
            );
          })}

          {/* End marker */}
          {death ? (
            <div className="relative pl-6">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-gray-700 dark:bg-gray-300 border-2 border-white dark:border-gray-950 shadow" />
              <div className="absolute -left-24 top-0.5 w-20 text-right">
                <div className="text-xs font-bold text-gray-700 dark:text-gray-300">{death}</div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium italic">
                {displayName} passed away at age {lifespan}.
              </p>
            </div>
          ) : (
            <div className="relative pl-6">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-500 border-2 border-white dark:border-gray-950 shadow" />
              <div className="absolute -left-24 top-0.5 w-20 text-right">
                <div className="text-xs font-bold text-gray-700 dark:text-gray-300">{currentYear}</div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Today
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
