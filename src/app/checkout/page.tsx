//tudo que estiver dentro da pasta app, tem que ser com default. a pasta app é que faz a rotas do app.
"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "@/components/checkout/checkout-form";

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const appearance = {
  rules: {
    ".Input": {
      borderRadius: "0.375rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
      lineHeight: "1.25rem",
      borderColor: "#e2e8f0",
      fontSize: ".875rem",
    },
    ".Label": {
      fontWeight: "500",
      color: "#050a17",
      marginNBottom: "0.317rem",
    },
    ".Input:focus": {
      boxShadow: "0 0 0 2px #fff, 0 0 0 4px #050a17",
    },
  },
};

export default function Checkout() {
  //const { total } = useCart();
  return (
    <Elements
      stripe={stripe}
      options={{
        appearance,
        loader: "auto",
        locale: "pt-BR",
        mode: "payment",
        currency: "brl",
        amount: 100,
      }}
    >
      <CheckoutForm />
    </Elements>
  );
}
