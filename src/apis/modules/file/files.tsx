import { request } from "@/utils";
import { AxiosResponse } from "axios";
import { PublicFile } from "./files.d";

const getPublicFileInfo = async (): Promise<AxiosResponse<PublicFile>> => 
{
  console.log("ready for request");
  const response = await request.post("v1/files/query");
  console.log("requets!!!")
  return response; 
};

export {
    getPublicFileInfo
}