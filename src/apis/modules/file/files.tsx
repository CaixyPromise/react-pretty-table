import { request } from "@/utils";
import { AxiosResponse } from "axios";
import { PublicFile } from "./files.d";

const getPublicFileInfo = async (): Promise<AxiosResponse<PublicFile>> => 
{
  const response = await request.post("/public/file");
  return response; // 这里应该返回完整的响应对象，而不是 response.data
};

export {
    getPublicFileInfo
}