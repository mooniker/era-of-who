export type Category = 'war' | 'politics' | 'science' | 'culture' | 'disaster' | 'civil_rights' | 'sports';

export interface HistoricalEvent {
  year: number;
  title: string;
  description: string;
  category: Category;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  war: 'War',
  politics: 'Politics',
  science: 'Science',
  culture: 'Culture',
  disaster: 'Disaster',
  civil_rights: 'Civil Rights',
  sports: 'Sports',
};

// Full class strings are required (no dynamic construction) so Tailwind includes them in the build.
export const CATEGORY_STYLES: Record<Category, { badge: string; dot: string }> = {
  war:         { badge: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400',             dot: 'bg-red-500' },
  politics:    { badge: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400',         dot: 'bg-blue-500' },
  science:     { badge: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400', dot: 'bg-purple-500' },
  culture:     { badge: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400',     dot: 'bg-amber-500' },
  disaster:    { badge: 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400', dot: 'bg-orange-500' },
  civil_rights:{ badge: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400',     dot: 'bg-green-500' },
  sports:      { badge: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-400',         dot: 'bg-cyan-500' },
};

export const EVENTS: HistoricalEvent[] = [
  {
    year: 1903,
    title: "Wright Brothers' First Flight",
    description: "Wilbur and Orville Wright achieve the first successful powered airplane flight at Kitty Hawk, NC, launching the age of aviation.",
    category: 'science',
  },
  {
    year: 1906,
    title: 'San Francisco Earthquake',
    description: "A 7.9-magnitude earthquake and resulting fires devastate San Francisco, killing an estimated 3,000 people and destroying much of the city.",
    category: 'disaster',
  },
  {
    year: 1908,
    title: 'Ford Model T Introduced',
    description: "Henry Ford introduces the Model T, making automobiles affordable for ordinary Americans and transforming daily life.",
    category: 'culture',
  },
  {
    year: 1912,
    title: 'Titanic Sinks',
    description: "The RMS Titanic strikes an iceberg and sinks on its maiden voyage, killing more than 1,500 people.",
    category: 'disaster',
  },
  {
    year: 1914,
    title: 'World War I Begins',
    description: "The assassination of Archduke Franz Ferdinand triggers a global conflict that will kill 20 million people and reshape the world map.",
    category: 'war',
  },
  {
    year: 1917,
    title: 'United States Enters WWI',
    description: "After years of neutrality, the US declares war on Germany following unrestricted submarine warfare and the Zimmermann Telegram.",
    category: 'war',
  },
  {
    year: 1918,
    title: 'World War I Ends',
    description: "Armistice Day ends four years of devastating trench warfare; the war killed an estimated 17–20 million people.",
    category: 'war',
  },
  {
    year: 1918,
    title: 'Spanish Flu Pandemic',
    description: "A catastrophic influenza pandemic sweeps the globe, killing 50–100 million people worldwide, including 675,000 Americans.",
    category: 'disaster',
  },
  {
    year: 1920,
    title: '19th Amendment Ratified',
    description: "American women win the right to vote after a 72-year suffrage campaign, one of the largest expansions of democracy in US history.",
    category: 'civil_rights',
  },
  {
    year: 1927,
    title: "Lindbergh's Transatlantic Flight",
    description: "Charles Lindbergh completes the first solo nonstop transatlantic flight, flying 33 hours from New York to Paris.",
    category: 'science',
  },
  {
    year: 1929,
    title: 'Stock Market Crash',
    description: "Black Tuesday triggers the Great Depression — the worst economic crisis in US history, with unemployment reaching 25%.",
    category: 'politics',
  },
  {
    year: 1933,
    title: 'New Deal Begins',
    description: "FDR launches sweeping economic reforms to combat the Great Depression, fundamentally reshaping the role of the federal government.",
    category: 'politics',
  },
  {
    year: 1937,
    title: 'Hindenburg Disaster',
    description: "The German passenger airship Hindenburg bursts into flames in New Jersey, killing 36 and ending the era of commercial airship travel.",
    category: 'disaster',
  },
  {
    year: 1941,
    title: 'Pearl Harbor Attack',
    description: "Japan's surprise attack on the US naval base at Pearl Harbor kills 2,403 Americans and brings the United States into World War II.",
    category: 'war',
  },
  {
    year: 1944,
    title: 'D-Day: Normandy Invasion',
    description: "Allied forces land on five beaches in Normandy, France in the largest seaborne invasion in history, turning the tide of WWII in Europe.",
    category: 'war',
  },
  {
    year: 1945,
    title: 'World War II Ends',
    description: "Germany surrenders in May and Japan in September after atomic bombs are dropped on Hiroshima and Nagasaki, ending the deadliest conflict in history.",
    category: 'war',
  },
  {
    year: 1947,
    title: 'Jackie Robinson Breaks Baseball Color Barrier',
    description: "Jackie Robinson joins the Brooklyn Dodgers, becoming the first Black player in Major League Baseball in the modern era.",
    category: 'sports',
  },
  {
    year: 1950,
    title: 'Korean War Begins',
    description: "North Korea invades South Korea; the US leads a UN coalition in a three-year conflict that kills 36,000 Americans.",
    category: 'war',
  },
  {
    year: 1953,
    title: 'DNA Double Helix Discovered',
    description: "Watson, Crick, Franklin, and Wilkins reveal the double-helix structure of DNA, launching the modern era of molecular biology.",
    category: 'science',
  },
  {
    year: 1954,
    title: 'Brown v. Board of Education',
    description: "The Supreme Court unanimously rules that racial segregation in public schools is unconstitutional, overturning Plessy v. Ferguson.",
    category: 'civil_rights',
  },
  {
    year: 1955,
    title: 'Montgomery Bus Boycott',
    description: "Rosa Parks' arrest for refusing to give up her bus seat sparks a 381-day boycott and elevates Dr. Martin Luther King Jr. to national prominence.",
    category: 'civil_rights',
  },
  {
    year: 1957,
    title: 'Sputnik Launched',
    description: "The Soviet Union launches Earth's first artificial satellite, shocking the US and igniting the Space Race.",
    category: 'science',
  },
  {
    year: 1961,
    title: 'First American in Space',
    description: "Alan Shepard becomes the first American in space on a 15-minute suborbital flight, three weeks after Soviet cosmonaut Yuri Gagarin orbited Earth.",
    category: 'science',
  },
  {
    year: 1962,
    title: 'Cuban Missile Crisis',
    description: "A 13-day nuclear standoff between the US and USSR over Soviet missiles in Cuba brings the world closer to nuclear war than at any other time.",
    category: 'politics',
  },
  {
    year: 1963,
    title: 'JFK Assassinated',
    description: "President John F. Kennedy is shot and killed in Dallas, TX. Lyndon Johnson is sworn in as president hours later.",
    category: 'politics',
  },
  {
    year: 1964,
    title: 'Civil Rights Act Signed',
    description: "President Johnson signs landmark legislation prohibiting discrimination based on race, color, religion, sex, or national origin.",
    category: 'civil_rights',
  },
  {
    year: 1965,
    title: 'Voting Rights Act',
    description: "Federal law bans discriminatory voting practices — such as literacy tests — that had systematically disenfranchised Black Americans across the South.",
    category: 'civil_rights',
  },
  {
    year: 1968,
    title: 'Martin Luther King Jr. Assassinated',
    description: "Civil rights leader Dr. Martin Luther King Jr. is shot and killed in Memphis, TN, igniting riots in more than 100 US cities.",
    category: 'civil_rights',
  },
  {
    year: 1969,
    title: 'Apollo 11 Moon Landing',
    description: "Neil Armstrong and Buzz Aldrin become the first humans to walk on the Moon, fulfilling Kennedy's challenge and winning the Space Race.",
    category: 'science',
  },
  {
    year: 1972,
    title: 'Watergate Break-In',
    description: "Nixon operatives are caught breaking into Democratic Party headquarters, setting off a political scandal that leads to the first presidential resignation.",
    category: 'politics',
  },
  {
    year: 1973,
    title: 'Roe v. Wade',
    description: "The Supreme Court rules that the Constitution protects a woman's right to abortion, a decision that shapes American politics for the next 50 years.",
    category: 'politics',
  },
  {
    year: 1974,
    title: 'Nixon Resigns',
    description: "Facing certain impeachment over the Watergate scandal, Richard Nixon becomes the only US president ever to resign from office.",
    category: 'politics',
  },
  {
    year: 1975,
    title: 'Vietnam War Ends',
    description: "Saigon falls to North Vietnamese forces, ending a war that lasted two decades and cost 58,000 American lives.",
    category: 'war',
  },
  {
    year: 1979,
    title: 'Iranian Hostage Crisis Begins',
    description: "Iranian revolutionaries seize the US Embassy in Tehran, holding 52 Americans hostage for 444 days and defining the Carter presidency.",
    category: 'politics',
  },
  {
    year: 1980,
    title: 'Miracle on Ice',
    description: "The underdog US Olympic hockey team defeats the heavily favored Soviet Union at the Lake Placid Winter Olympics in one of the greatest upsets in sports history.",
    category: 'sports',
  },
  {
    year: 1981,
    title: 'First AIDS Cases Reported',
    description: "The CDC reports the first cases of what will become the AIDS epidemic, which kills over 700,000 Americans and millions worldwide.",
    category: 'disaster',
  },
  {
    year: 1986,
    title: 'Space Shuttle Challenger Explodes',
    description: "The Space Shuttle Challenger breaks apart 73 seconds after launch, killing all seven crew members including teacher Christa McAuliffe.",
    category: 'disaster',
  },
  {
    year: 1989,
    title: 'Berlin Wall Falls',
    description: "East Germany opens the Berlin Wall on November 9, symbolizing the collapse of communism in Europe and the approaching end of the Cold War.",
    category: 'politics',
  },
  {
    year: 1991,
    title: 'Gulf War',
    description: "A US-led coalition expels Iraq from Kuwait in 100 hours of ground combat, establishing America as the world's dominant military power.",
    category: 'war',
  },
  {
    year: 1991,
    title: 'Soviet Union Dissolves',
    description: "The USSR officially breaks apart into 15 independent republics, ending the Cold War and leaving the United States as the sole global superpower.",
    category: 'politics',
  },
  {
    year: 1995,
    title: 'Oklahoma City Bombing',
    description: "Timothy McVeigh bombs the Alfred P. Murrah Federal Building, killing 168 people including 19 children — the deadliest domestic terror attack in US history.",
    category: 'disaster',
  },
  {
    year: 1997,
    title: 'Dolly the Sheep Cloned',
    description: "Scottish scientists announce the successful cloning of a mammal from an adult cell, raising profound questions about genetics, ethics, and the future of life.",
    category: 'science',
  },
  {
    year: 1998,
    title: 'Clinton Impeached',
    description: "The House of Representatives impeaches President Bill Clinton on charges of perjury and obstruction of justice. The Senate acquits him.",
    category: 'politics',
  },
  {
    year: 2001,
    title: 'September 11 Attacks',
    description: "Al-Qaeda hijackers crash four planes into the World Trade Center, Pentagon, and a Pennsylvania field, killing nearly 3,000 and launching the War on Terror.",
    category: 'disaster',
  },
  {
    year: 2003,
    title: 'Iraq War Begins',
    description: "The US invades Iraq based on claims of WMDs, toppling Saddam Hussein but sparking an insurgency that engulfs the region for years.",
    category: 'war',
  },
  {
    year: 2004,
    title: 'Facebook Founded',
    description: "Mark Zuckerberg launches Facebook from his Harvard dorm room, beginning a transformation of global communication, politics, and culture.",
    category: 'culture',
  },
  {
    year: 2005,
    title: 'Hurricane Katrina',
    description: "A Category 5 hurricane devastates New Orleans and the Gulf Coast, killing over 1,800 people in a catastrophe compounded by a failed government response.",
    category: 'disaster',
  },
  {
    year: 2007,
    title: 'iPhone Introduced',
    description: "Apple releases the first iPhone, combining phone, internet, and music player in a single device that redefines how people live and communicate.",
    category: 'culture',
  },
  {
    year: 2008,
    title: 'Obama Elected President',
    description: "Barack Obama is elected the 44th president, becoming the first African American to hold the office in a historic victory.",
    category: 'politics',
  },
  {
    year: 2008,
    title: 'Global Financial Crisis',
    description: "The collapse of Lehman Brothers triggers the worst financial crisis since the Great Depression, wiping out trillions in wealth and causing mass unemployment.",
    category: 'disaster',
  },
  {
    year: 2010,
    title: 'Deepwater Horizon Disaster',
    description: "An explosion on the BP Deepwater Horizon rig kills 11 workers and causes the largest marine oil spill in US history, releasing 200 million gallons into the Gulf.",
    category: 'disaster',
  },
  {
    year: 2015,
    title: 'Same-Sex Marriage Legalized',
    description: "The Supreme Court rules in Obergefell v. Hodges that same-sex couples have a constitutional right to marry in all 50 states.",
    category: 'civil_rights',
  },
  {
    year: 2016,
    title: 'Trump Elected President',
    description: "Donald Trump defeats Hillary Clinton in a stunning upset, reshaping the Republican Party and beginning a turbulent era in American politics.",
    category: 'politics',
  },
  {
    year: 2017,
    title: '#MeToo Movement Goes Viral',
    description: "Allegations against Harvey Weinstein spark a global reckoning with sexual harassment and assault, toppling powerful figures across industries.",
    category: 'civil_rights',
  },
  {
    year: 2019,
    title: 'First Black Hole Photograph',
    description: "The Event Horizon Telescope collaboration releases the first-ever image of a black hole, capturing the supermassive black hole in galaxy M87.",
    category: 'science',
  },
  {
    year: 2020,
    title: 'COVID-19 Pandemic',
    description: "A novel coronavirus spreads globally, killing over 1 million Americans, shutting down economies worldwide, and fundamentally altering daily life.",
    category: 'disaster',
  },
  {
    year: 2020,
    title: 'George Floyd Killed; BLM Protests',
    description: "George Floyd's murder by Minneapolis police sparks the largest protest movement in US history, reigniting a national reckoning with systemic racism.",
    category: 'civil_rights',
  },
  {
    year: 2021,
    title: 'January 6 Capitol Attack',
    description: "Supporters of President Trump storm the US Capitol while Congress certifies the 2020 election results, in the first breach of the building since 1814.",
    category: 'politics',
  },
  {
    year: 2022,
    title: 'Roe v. Wade Overturned',
    description: "The Supreme Court's Dobbs decision eliminates the federal right to abortion after 50 years, immediately triggering bans in roughly half of US states.",
    category: 'politics',
  },
  {
    year: 2022,
    title: 'Russia Invades Ukraine',
    description: "Russia launches a full-scale invasion of Ukraine, triggering the largest war in Europe since WWII and a global energy and food crisis.",
    category: 'war',
  },
  {
    year: 2023,
    title: 'AI Revolution',
    description: "ChatGPT and large language models go mainstream, beginning a transformative shift in technology, work, and society comparable to the birth of the internet.",
    category: 'science',
  },
  {
    year: 2024,
    title: 'Trump Re-Elected President',
    description: "Donald Trump wins the 2024 presidential election, becoming only the second president in US history elected to non-consecutive terms.",
    category: 'politics',
  },
];
