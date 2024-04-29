//tudo que estiver dentro da pasta app, tem que ser com default. a pasta app é que faz a rotas do app.
"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "@/components/checkout/checkout-form";
//import { useCart } from "@/context/cart-context";

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const appearance = {};

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
