import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { beforeUser, verifyUser } from "../user/user.action";
import { useDispatch, useSelector } from "react-redux";
const VerifyEmail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { token } = useParams();
  const verifyAccountFlag = useSelector(
    (state) => state.user?.verifyAccountFlag
  );
  useEffect(() => {
    if (verifyAccountFlag) {
      dispatch(beforeUser());
      navigate("/studio/pricing");
    }
  }, [verifyAccountFlag, dispatch]);
  const Verify = () => {
    const body = { token: token };
    dispatch(verifyUser(body));
  };
  return (
    <button className="btn-verify" onClick={Verify}>
      click to verify
    </button>
  );
}

export default VerifyEmail;
