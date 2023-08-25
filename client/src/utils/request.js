/* eslint-disable import/no-anonymous-default-export */

import config from "../config";
import axios from "axios";
import qs from "qs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const statusHandler = async response => {
  if (response.status >= 200 && response.status < 400) {
    return response;
  }

  const error = new Error(response.statusText);
  error.status = response.status;
  error.response = response;

  throw error;
};

const nonJsonErrorHandler = {
  type: "Error",
  payload: "Сервертэй холбогдоход алдаа гарлаа",
};

const errorHandler = async error => {
  if (error.response && error.response.status === 401) {
    return {
      type: "Error",
      payload: "Хэрэглэгчээр нэвтрэх шаардлагатай",
    };
  }

  if (error.response) {
    try {
      const json = await error.response.json();

      if (json.message && typeof json.message === "string") {
        // notification.warning({
        //   message    : "Санамж",
        //   description: json.message
        // });
      }

      throw json;
    } catch (jsonParseError) {
      throw nonJsonErrorHandler;
    }
  } else {
    throw nonJsonErrorHandler;
  }
};

const request = async (url, data = {}, options) => {
  let URL = `${config.baseUrl}${config.vesion}${url}`;
  if (options.method === "get") URL = `${URL}${`?${qs.stringify(data)}`}`;

  const getToken = () => {
    return localStorage.getItem("authToken") || null;
  };

  const headers = {
    Authorization: "Bearer " + getToken(),
    "Content-Type": "application/json",
  };

  return await axios({
    method: options.method,
    url: URL,
    data: data,
    headers: headers,
    withCredentials: true,
  })
    .then(response => response.data)
    .catch(({ response }) => {
      const { data } = response;
      switch (response.status) {
        case 401: {
          const navigate = useNavigate();
          toast.error(data.message || "Хандах эрх хүрэлцэхгүй байна", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/login");
          break;
        }
        case 400: {
          toast.warning(data.message || "", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          break;
        }
        default: {
          toast.warning("Үйлдэл амжилтгүй боллоо", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          break;
        }
      }
      throw response;
    });
};

const httpMethod = () => {
  return {
    get: (url, data = {}) => {
      let options = {};
      if (data.signal) options.signal = data.signal;
      return request(url, data, { ...options, method: "get" });
    },
    post: (url, data, options) => {
      return request(url, data, { ...options, method: "post" });
    },
    put: (url, data, options) => {
      return request(url, data, { ...options, method: "put" });
    },
    del: (url, data, options) => {
      return request(url, data, { ...options, method: "delete" });
    },
  };
};

export default {
  ...httpMethod(),
};
