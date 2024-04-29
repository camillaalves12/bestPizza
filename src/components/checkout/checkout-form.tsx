import { AddressElement, PaymentElement } from "@stripe/react-stripe-js";
import { CreditCard, LockKeyhole, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrderSummary } from "./order-summary";

export function CheckoutForm() {
  return (
    <main className="container mt-4">
      <div className="flex items-center gap-2 my-8">
        <LockKeyhole />
        <h1 className="text-2xl font-semibold"> Finalize o seu pedido </h1>
      </div>

      <form>
        <div className="flex gap-8">
          <div className="flex w-1/2 flex-col gap-8">
            <div className="w-full self-start rounded-lg border p-6">
              <h2 className="mb-8 flex items-center gap-2 font-semibold">
                <MapPin size={20} />
                Endereço de Entrega
              </h2>

              <AddressElement options={{ mode: "shipping" }} />
            </div>

            <div className="w-full self-start rounded-lg border p-6">
              <h2 className="mb-8 flex items-center gap-2 font-semibold">
                <CreditCard size={20} />
                Pagamento
              </h2>
              <PaymentElement />

              <Button className="w-full" type="submit">
                Pagar
              </Button>
            </div>
          </div>

          <OrderSummary />
        </div>
      </form>
    </main>
  );
}
