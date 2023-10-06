export const ENV = {
  backendBaseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  backendURL: process.env.REACT_APP_BACKEND_FRONT_BASE_URL,
  frontendBaseURL: process.env.REACT_APP_DOMAIN_URL,
  googleClientID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  hexSecret: process.env.REACT_APP_HEX_SECRET,
  Authorization: process.env.REACT_APP_AUTHORIZATION,
  xAuthToken: process.env.REACT_APP_X_AUTH_TOKEN,
  pythonBaseURL: process.env.REACT_APP_PYTHON_BASE_URL,
  messageWordLimit: 350,
  integerNumberValidator: function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    const specialKeys = [46, 8, 9, 27, 13];

    // Allow: Ctrl+A,Ctrl+C,Ctrl+V, Command+A
    if (
      specialKeys.includes(e.keyCode) ||
      // Allow: Ctrl+A,Ctrl+C,Ctrl+Z,Ctrl+X Command+A
      ((e.keyCode === 65 ||
        e.keyCode === 67 ||
        e.keyCode === 90 ||
        e.keyCode === 88) &&
        (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: home, end, left, right, down, up
      (e.keyCode >= 35 && e.keyCode <= 40)
    ) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if (
      (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  },
  appName: "AR-AI",
};
