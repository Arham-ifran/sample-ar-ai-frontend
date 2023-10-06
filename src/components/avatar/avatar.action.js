import {
  BEFORE_AVATAR,
  GET_AVATARS,
  GET_AVATAR,
  VALIDATE_IMAGE,
  DELETE_AVATAR,
  CREATE_AVATAR,
  MODAL_AVATAR,
  GET_ERRORS,
} from "../../redux/types";
import { ENV } from "../../config/config";
import { toast } from "react-toastify";
export const beforeAvatar = () => {
  return {
    type: BEFORE_AVATAR,
  };
};
export const getAvatar = (body) => (dispatch) => {
  dispatch({
    type: GET_AVATAR,
    payload: body,
  });
};
export const modalAvatar = () => {
  return {
    type: MODAL_AVATAR,
  };
};
export const getAvatars = () => (dispatch) => {
  const url = `${ENV.backendURL}avatars/get-avatars`;
  fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: ENV.Authorization,
      "x-auth-token": ENV.x_auth_token,
      "x-access-token": localStorage.getItem("accessToken") || "",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        dispatch({
          type: GET_AVATARS,
          payload: data.data,
        });
      } else {
        toast.error(data.message);
        dispatch({
          type: GET_ERRORS,
          payload: data,
        });
      }
    })
    .catch((error) => {
      if (error.response && error.response.data) {
        const { data } = error.response;
        if (data.message) toast.error(data.message);
      }
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};
export const validateImg = (formData) => (dispatch) => {
  const url = `${ENV.backendURL}avatars/validate-image`;
  fetch(url, {
    method: "POST",
    headers: {
      Authorization: ENV.Authorization,
      "x-auth-token": ENV.x_auth_token,
      "x-access-token": localStorage.getItem("accessToken") || "",
    },
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        dispatch({
          type: VALIDATE_IMAGE,
          payload: data.data,
        });
      } else {
        toast.error(data.message);
        dispatch({
          type: GET_ERRORS,
          payload: data,
        });
      }
    })
    .catch((error) => {
      if (error.response && error.response.data) {
        const { data } = error.response;
        if (data.message) toast.error(data.message);
      }
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};
export const cerateAvatar = (formData) => (dispatch) => {
  const url = `${ENV.backendURL}avatars/create-avatar`;
  fetch(url, {
    method: "POST",
    headers: {
      Authorization: ENV.Authorization,
      "x-auth-token": ENV.x_auth_token,
      "x-access-token": localStorage.getItem("accessToken") || "",
    },
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        dispatch({
          type: CREATE_AVATAR,
          payload: data.data,
        });
      } else {
        toast.error(data.message);
        dispatch({
          type: GET_ERRORS,
          payload: data,
        });
      }
    })
    .catch((error) => {
      if (error.response && error.response.data) {
        const { data } = error.response;
        if (data.message) toast.error(data.message);
      }
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};
export const getSingleAvatars = () => (dispatch) => {
  const url = `${ENV.backendURL}avatars/get-avatar`;
  fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: ENV.Authorization,
      "x-auth-token": ENV.x_auth_token,
      "x-access-token": localStorage.getItem("accessToken") || "",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        dispatch({
          type: GET_AVATAR,
          payload: data.data,
        });
      } else {
        toast.error(data.message);
        dispatch({
          type: GET_ERRORS,
          payload: data,
        });
      }
    })
    .catch((error) => {
      if (error.response && error.response.data) {
        const { data } = error.response;
        if (data.message) toast.error(data.message);
      }
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};
export const deleteAvatar = (id) => (dispatch) => {
  const url = `${ENV.backendURL}avatars/delete-avatar/${id}`;
  fetch(url, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: ENV.Authorization,
      "x-auth-token": ENV.x_auth_token,
      "x-access-token": localStorage.getItem("accessToken") || "",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        toast.success(data.message);
        dispatch({
          type: DELETE_AVATAR,
          payload: data.data,
        });
      } else {
        toast.error(data.message);
        dispatch({
          type: GET_ERRORS,
          payload: data,
        });
      }
    })
    .catch((error) => {
      if (error.response && error.response.data) {
        const { data } = error.response;
        if (data.message) toast.error(data.message);
      }
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};
