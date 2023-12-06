export class SortingServiceException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SortingServiceException";
  }
}
