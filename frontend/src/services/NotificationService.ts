import customAxios from "./axiosInstance";

const url = "http://localhost:1914/api/devices";
export const getNotifications = (deviceType: string) => {
  console.log(deviceType);
  return (
    customAxios
      .get(`${url}/${deviceType}/notification-dummy-values`)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((response: { data: any; }) => response.data)
      .catch()
  );
};
