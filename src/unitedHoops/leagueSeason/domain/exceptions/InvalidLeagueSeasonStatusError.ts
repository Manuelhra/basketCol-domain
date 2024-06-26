class InvalidLeagueSeasonStatusError extends Error {
  constructor(invalidStatus: string, validStatuses: readonly string[]) {
    super(`Invalid league season status: "${invalidStatus}". Valid statuses are: ${validStatuses.join(', ')}`);

    this.name = 'InvalidLeagueSeasonStatusError';
  }
}

export default InvalidLeagueSeasonStatusError;
