import {
  BEFORE_AVATAR,
  GET_AVATARS,
  GET_AVATAR,
  VALIDATE_IMAGE,
  CREATE_AVATAR,
  MODAL_AVATAR,
  DELETE_AVATAR,
} from "../../redux/types";
const initialState = {
  avatar: null,
  avatars: null,
  upsertAvatarAuth: false,
  deleteAvatarAuth: false,
  getSingleAvatar: false,
  getAvatarAuth: false,
  avatarModelFlag: false,
  validateImageFlag: false,
  validateImage: null,
};
const avatarReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AVATARS:
      return {
        ...state,
        avatars: action.payload,
        getAvatarAuth: true,
      };
    case GET_AVATAR:
      return {
        ...state,
        getSingleAvatar: true,
        avatar: action.payload,
      };
    case DELETE_AVATAR:
      return {
        ...state,
        deleteAvatarAuth: true,
        avatar: action.payload,
      };
    case VALIDATE_IMAGE:
      return {
        ...state,
        validateImageFlag: true,
        validateImage: action.payload,
      };
    case CREATE_AVATAR:
      return {
        ...state,
        upsertAvatarAuth: true,
        avatar: action.payload,
      };
    case BEFORE_AVATAR:
      return {
        ...state,
        avatar: null,
        avatars: null,
        upsertAvatarAuth: false,
        deleteAvatarAuth: false,
        getAvatarAuth: false,
        getSingleAvatar: false,
        avatarModelFlag: false,
        validateImageFlag: false,
        validateImage: null,
      };
    case MODAL_AVATAR:
      return {
        ...state,
        avatarModelFlag: true,
      };
    default:
      return {
        ...state,
      };
  }
}
export default avatarReducer