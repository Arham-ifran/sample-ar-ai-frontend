import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch} from "react-redux";
import Sidebar from "../../components/sidebar/sidebar";
import { getPayment } from "../../components/stripe-payment/stripe-payment.action";
const Layout2 = (props) => {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken") || "";
  useEffect(() => {
    if (accessToken) dispatch(getPayment());
  }, [accessToken,dispatch]);
  return (
   <div className="pages-main-wrapper">
     <Container>
        <div className="main-wrapper d-flex">
          <Sidebar />
          <div className="content-area">
            <div className="black-bg"></div>
            {props.children}
          </div>
        </div>
     </Container>
   </div>
  );
}

export default Layout2;
