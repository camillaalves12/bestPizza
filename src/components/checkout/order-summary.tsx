import { ShoppingCart } from "lucide-react";

export function OrderSummary() {
  return (
    <div className="w-1/2 self-satrt rounded-lg border p-6">
      <h2>
        <ShoppingCart />
        Resumo do Pedido
      </h2>

      <ul></ul>

      <div className="flex flex-col gap-2 border-t pt-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Subtotal</span>
          <span className="text-gray-500">100</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Taxa de Entrega</span>
          <span className="text-gray-500">100</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-gray-500">100</span>
        </div>
      </div>
    </div>
  );
}
