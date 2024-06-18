class DuplicateLeagueNameError extends Error {
  constructor(value: string, label: 'SHORT_NAME' | 'OFFICIAL_NAME') {
    super(`The league ${label} name <${value}> is already registered. Please choose a different name for the league.`);
  }
}

export default DuplicateLeagueNameError;
