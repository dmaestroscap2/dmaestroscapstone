export const INSTRUMENTS = [
  "guitar",
  "piano",
  "saxophone",
  "clarinet",
  "trombone",
  "trumpet",
  "xylophone",
] as const;

export type Instrument = (typeof INSTRUMENTS)[number];

