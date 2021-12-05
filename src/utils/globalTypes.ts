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

export type TUser = {
  id: number;
  username: string;
  email: string;
};

export type EstablishmentType = {
  id: number;
  title: string;
  price: number;
  bedrooms: number;
  distance_city_centre_km: number;
  user: TUser;
  slug: string;
  image: {
    alternativeText: string;
    url: string;
    formats: {
      large: {
        url: string;
      };
      small: {
        url: string;
      };
    };
  };
  amenities: {
    breakfast: boolean;
    shower: boolean;
    gym: boolean;
    office: boolean;
    cleaning: boolean;
  };
  description: string;
  short_description: string;
};

export type EstablishmentsArray = {
  id: number;
  image: {
    alternativeText?: string;
    url: string;
    formats: {
      small: {
        url: string;
      };
    };
  };
  price: number;
  slug: string;
  title: string;
  category: {
    name: string;
  };
}[];
