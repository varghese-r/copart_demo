import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Jw3UpHciXopN8IpxX0gfmfWroOGi9d9XRuDlpH9bqRCt0g9ykocNmpe0uDKnBTv2KHTYUQHaGdKs7z42zUGwZEs00M6FVmlJx"
);

const Payment = (prop) => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <div className="brand">
        {/* <img src={require("./assets/clock-logo.png")} alt="" /> */}
        <img
          src="https://www.carlogos.org/logo/Rolls-Royce-RR-logo-1920x1080.png"
          alt=""
        />
        <h1>Payment Confirmation</h1>
      </div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default Payment;
