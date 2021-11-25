export enum FormStatus {
  IDLE = "idle",
  SUBMITTING = "submitting",
  SUCCESS = "success",
  ERROR = "error",
}

export enum FetchStatus {
  IDLE = "idle",
  FETCHING = "fetching",
  SUCCESS = "success",
  ERROR = "error",
  NO_RESULT = "no_result",
}

export type SpacingScale =
  | "0"
  | "0.25rem"
  | "0.5rem"
  | "0.75rem"
  | "1rem"
  | "1.5rem"
  | "2rem"
  | "3rem"
  | "4rem"
  | "5rem";
