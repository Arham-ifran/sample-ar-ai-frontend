import React, { useEffect, useState } from "react";
import Styles from "./Styles";
import Card from "./card";
import { Form } from "react-final-form";
import { createPayment } from "./stripe-payment.action";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/loader";
import { ENV } from "../../config/config";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Payment = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const upsertPaymentAuth = useSelector(
    (state) => state.payments?.upsertPaymentAuth
  );
  const propsData = location.state?.propsData;
  const type = location.state?.type;
  const plan = location.state?.plan;
  const isMonthly = location.state?.isMonthly;
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    cvc: "",
    expiry: "", // month/year
    number: "", // card number
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    cvc: "",
    expiry: "", // month/year
    number: "", // card number
  });
  useEffect(() => {
    if (!window.document.getElementById("stripe-script")) {
      let s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://js.stripe.com/v2/";
      s.onload = () => {
        window["Stripe"].setPublishableKey(ENV?.stripeFrontKey);
      };
      window.document.body.appendChild(s);
    }
  }, []);
  const onSubmit = async (e) => {
    await sleep(300);
    let flag = true;
    let error = {};
    if (!data?.name) {
      flag = false;
      error.name = "Enter Name";
    }
    if (!data?.email) {
      flag = false;
      error.email = "Enter Email";
    }
    if (!isValidEmail(data?.email)) {
      flag = false;
      error.email = "Invalid Email";
    }
    if (!data?.cvc) {
      flag = false;
      error.cvc = "Enter CVC";
    }
    if (!data?.expiry) {
      flag = false;
      error.expiry = "Enter Expiry";
    }
    if (!data?.number) {
      flag = false;
      error.number = "Enter Number";
    }
    if (flag) {
      if (data?.expiry[2] === "/") {
        try {
          window.Stripe.card.createToken(
            {
              number: data.number,
              exp_month: data.expiry.split("/")[0],
              exp_year: data.expiry.split("/")[1],
              cvc: data.cvc,
              name: data.name,
            },
            (status, response) => {
              if (status === 200) {
                setLoader(true);
                const payload = {
                  type: type,
                  plan: plan,
                  planId: plan._id,
                  email: data.email,
                  amount: propsData?.price,
                  availableTokens: Number(propsData?.credits),
                  textCHatTokens: Number(plan?.numChatGen),
                  name: propsData?.name,
                  videoLength: propsData?.videoLength,
                  exp_month: data.expiry.split("/")[0],
                  exp_year: data.expiry.split("/")[1],
                  cvc: data.cvc,
                  number: data?.number,
                  userName: data?.name,
                };
                if (isMonthly) {
                  payload.amount = propsData?.monthlyPlanPrice;
                  payload.priceId = propsData?.monthlyPriceId;
                  payload.packageId = propsData?.monthlyProductId;
                } else {
                  payload.amount = propsData?.yearlyPlanPrice;
                  payload.priceId = propsData?.yearlyPriceId;
                  payload.packageId = propsData?.yearlyProductId;
                }
                dispatch(createPayment(payload));
              } else {
                toast.error(response.error.message);
              }
            }
          );
        } catch (error) {
          console.log("error...", error);
        }
      } else {
        toast.error("expiry date not in format");
      }
    } else {
      setError(error);
    }
  };
  useEffect(() => {
    if (upsertPaymentAuth) {
      navigate("/studio");
    }
  }, [upsertPaymentAuth]);
  const setter = (e) => {
    if (e.target.name === "cvc") {
      let text = e.target.value.toString();
      if (text.length < 5) {
        setData({ ...data, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: "" });
      }
    } else if (e.target.name === "expiry") {
      let temp2 = e.target.value;
      let text = e.target.value.toString();
      if (text.length === 2 && temp2[1] !== "/") {
        let temp = e.target.value + "/";
        setData({ ...data, [e.target.name]: temp });
        setError({ ...error, [e.target.name]: "" });
      } else if (text.length < 6) {
        setData({ ...data, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: "" });
      }
    } else if (e.target.name === "number") {
      let temp = e.target.value.toString();
      if (temp.length < 17) {
        setData({ ...data, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: "" });
      }
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
      setError({ ...error, [e.target.name]: "" });
    }
  }
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  const reset=()=> {
    setData({ name: "", email: "", cvc: "", expiry: "", number: "" });
    setError({ name: "", email: "", cvc: "", expiry: "", number: "" });
  }
  return (
    <>
      {" "}
      {loader ? (
        <Loader />
      ) : (
        <div className="payment-procedure">
          {propsData ? (
            <Styles>
              <Form
                className="payment-form"
                onSubmit={onSubmit}
                render={({
                  handleSubmit,
                  form,
                  submitting,
                  pristine,
                  values,
                  active,
                }) => {
                  return (
                    <div>
                      <form onSubmit={handleSubmit}>
                        <Card
                          number={data.number || ""}
                          name={data.name || ""}
                          expiry={data.expiry || ""}
                          cvc={data.cvc || ""}
                          focused={active}
                        />
                        <div className="justify-content-center">
                          <h5>
                            {" "}
                            Total : $
                            {isMonthly
                              ? propsData?.monthlyPlanPrice
                              : propsData?.yearlyPlanPrice}{" "}
                          </h5>
                        </div>

                        <div>
                          <input
                            name="email"
                            component="input"
                            type="text"
                            placeholder="Enter Email"
                            onChange={setter}
                            value={data.email}
                          />
                          <span>{error?.email}</span>
                        </div>
                        <div>
                          <input
                            name="number"
                            component="input"
                            type="text"
                            pattern="[\d| ]{16,22}"
                            placeholder="Enter Card Number"
                            onKeyDown={(e) => ENV.integerNumberValidator(e)}
                            onChange={setter}
                            value={data.number}
                          />
                          <span>{error?.number}</span>
                        </div>
                        <div>
                          <input
                            name="name"
                            component="input"
                            type="text"
                            placeholder="Enter Name"
                            onChange={setter}
                            value={data?.name}
                          />
                          <span>{error?.name}</span>
                        </div>
                        <div className="two-flields">
                          <input
                            name="expiry"
                            component="input"
                            type="text"
                            pattern="\d\d/\d\d"
                            placeholder="MM/YY"
                            onKeyDown={(e) => ENV.integerNumberValidator(e)}
                            onChange={setter}
                            value={data?.expiry}
                          />
                          <span>{error?.expiry}</span>
                          <input
                            name="cvc"
                            component="input"
                            type="text"
                            pattern="\d{3,4}"
                            placeholder="Enter CVC"
                            onKeyDown={(e) => ENV.integerNumberValidator(e)}
                            onChange={setter}
                            value={data?.cvc}
                          />
                          <span>{error?.cvc}</span>
                        </div>
                        <div className="buttons">
                          <button type="submit" disabled={submitting}>
                            Submit
                          </button>
                          <button type="button" onClick={reset}>
                            Reset
                          </button>
                        </div>
                      </form>
                    </div>
                  );
                }}
              />
              <ToastContainer />
            </Styles>
          ) : (
            <span>No package for billing</span>
          )}
        </div>
      )}
    </>
  );
};

export default Payment;
