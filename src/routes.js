import React from "react";
// layouts
import Layout1 from "./layouts/layout1/layout1";
import Layout2 from "./layouts/layout2/layout2";
import Layout3 from "./layouts/layout3/layout3";
import Layout4 from "./layouts/layout4/layout4";
import Home from "./components/home/home";
import Layout5 from "./layouts/layout5/layout5";
import TermsConditions from "./components/terms-conditions/terms-conditions";
import PrivacyPolicy from "./components/privacy-policy/privacy-policy";

// components
const Template = React.lazy(() => import("./components/template/template"));
const Login = React.lazy(() => import("./components/login-page/login"));
const Signup = React.lazy(() => import("./components/signup-page/signup"));
// const Plans = React.lazy(() => import("./components/plans/plans"));
const Payment = React.lazy(() => import("./components/stripe-payment/stripe"));
const ForgotPassword = React.lazy(() =>
  import("./components/forgot-password/forgot-password")
);
const ResetPassword = React.lazy(() =>
  import("./components/reset-password/reset-password")
);
const VerifyEmail = React.lazy(() =>
  import("./components/verify-email/verify-email")
);
const StudioDID = React.lazy(() =>
  import("./components/studio-ar-ai/home-page/home-page")
);
const ErrorPage = React.lazy(() =>
  import("./components/error-page/error-page")
);
const EditorPage = React.lazy(() =>
  import("./components/studio-ar-ai/editor-page/editor-page")
);
const Pricing = React.lazy(() =>
  import("./components/studio-ar-ai/pricing/pricing")
);
const AccountSettings = React.lazy(() =>
  import("./components/studio-ar-ai/account-settings/account-settings")
);
const Faqs = React.lazy(() => import("./components/studio-ar-ai/faq/faq"));
const ContactUs = React.lazy(() =>
  import("./components/studio-ar-ai/contact-us/contact-us")
);

// routes
const routes = [
  {
    path: "/chat-ar-ai",
    access: true,
    exact: true,
    title: "Template",
    layout: Layout2,
    component: Template,
  },
  {
    path: "/login",
    access: true,
    exact: true,
    title: "Login Page",
    layout: Layout1,
    component: Login,
  },
  {
    path: "/signup",
    access: true,
    exact: true,
    title: "Signup Page",
    layout: Layout1,
    component: Signup,
  },
  {
    path: "/verify-email/:token",
    access: true,
    exact: true,
    title: "Verify Email Page",
    layout: Layout1,
    component: VerifyEmail,
  },
  {
    path: "/reset-password/:token",
    access: true,
    exact: true,
    title: "Reset Password",
    layout: Layout1,
    component: ResetPassword,
  },
  {
    path: "/",
    access: true,
    exact: true,
    title: "Home Page",
    layout: Layout5,
    component: Home,
  },
  {
    path: "/terms-conditions",
    access: true,
    exact: true,
    title: "Home Page",
    layout: Layout5,
    component: TermsConditions,
  },
  {
    path: "/privacy-policy",
    access: true,
    exact: true,
    title: "Home Page",
    layout: Layout5,
    component: PrivacyPolicy,
  },

  {
    path: "/forgot-password",
    access: true,
    exact: true,
    title: "Forgot Password",
    layout: Layout1,
    component: ForgotPassword,
  },
  {
    path: "/studio/editor",
    access: true,
    exact: true,
    title: "Studio Editor",
    layout: Layout3,
    component: EditorPage,
  },
  {
    path: "/studio",
    access: true,
    exact: true,
    title: "Studio DID",
    layout: Layout3,
    component: StudioDID,
  },
  {
    path: "/account-settings",
    access: true,
    exact: true,
    title: "Account Settings",
    layout: Layout3,
    component: AccountSettings,
  },
  {
    path: "/*",
    access: true,
    exact: true,
    title: "Error Page",
    layout: Layout1,
    component: ErrorPage,
  },
  {
    path: "/payment",
    access: true,
    exact: true,
    title: "Payment",
    layout: Layout1,
    component: Payment,
  },
  // {
  //   path: "/plans",
  //   access: true,
  //   exact: true,
  //   title: "Plans",
  //   layout: Layout1,
  //   component: Plans,
  // },
  {
    path: "/studio/pricing",
    access: true,
    exact: true,
    title: "Error Page",
    layout: Layout4,
    component: Pricing,
  },
  {
    path: "/studio/faqs",
    access: true,
    exact: true,
    title: "Error Page",
    layout: Layout4,
    component: Faqs,
  },
  {
    path: "/studio/contact",
    access: true,
    exact: true,
    title: "Error Page",
    layout: Layout4,
    component: ContactUs,
  },
];

export default routes;
