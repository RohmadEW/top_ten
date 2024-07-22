import { AxiosError } from "axios";

export interface Response<R = Record<string, string>> {
  success: boolean;
  message: string;
  data?: R;
}

export interface ErrorAlert {
  message: string;
}

export interface ErrorResponse {
  alert?: Partial<ErrorAlert>;
}

export type AxiosErrorResponse = AxiosError<ErrorResponse>;
