


export interface FetchResponse<T> {
  // token?: TokenResponse;
  data: T[];
  success: boolean;
  msg: string;
}

export interface PostResponse<T> {

  data: T;
  success: boolean;
  msg: string;
}

export interface AuthResponse<T> {
  token: string;
  user: T;
  success: boolean;
  msg: string;
}

export interface IUploadImageResponse {
  url: string;
  success: boolean;
  msg: string;
}
