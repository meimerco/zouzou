import axios from "axios";

export const getLocations = async () => {
  const url =
    "https://dev-c6165-1303259770.ap-shanghai.service.tcloudbase.com/external/v1.0/locations";
  const res = await axios.get(url);
  return res.data;
};
