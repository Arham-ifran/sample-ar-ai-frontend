import { combineReducers } from "redux";
import errorReducer from "./shared/error/error.reducer";
import avatarReducer from "../components/avatar/avatar.reducer";
import voiceReducer from "../components/voice/voice.reducer";
import userReducer from "../components/user/user.reducer";
import paymentReducer from "../components/stripe-payment/stripe-payment.reducer";
import presenterReducer from "../components/presenter/presenter.reducer";
import planReducer from "../components/plans/plans.reducer";
import videoInputReducer from "../components/studio-ar-ai/video-input-data/video-input-data.reducer";
import videoReducer from "../components/video/video.reducer";
import faqsReducer from "../components/faqs/faqs.reducer";
import contactUsReducer from "../components/contact-us/contact-us.reducer";
import gptReducer from "../components/studio-ar-ai/ask-gpt/ask-gpt.reducer";
export default combineReducers({
  user: userReducer,
  voice: voiceReducer,
  avatar: avatarReducer,
  plans: planReducer,
  videoForm: videoInputReducer,
  askGpot: gptReducer,
  presenter: presenterReducer,
  payments: paymentReducer,
  videos: videoReducer,
  error: errorReducer,
  faqs: faqsReducer,
  contact: contactUsReducer,
});
