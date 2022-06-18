import { GET } from "./axios";

export const fetchItem = async (): Promise<any> => GET("/rand");
