import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const OrderSummary = () => {
  const items = [
    { name: "Premium Subscription", price: 29.99 },
    { name: "Additional Features", price: 9.99 },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <Card className="w-full max-w-md mx-auto p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-foreground mb-4">Order Summary</h2>
      
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-foreground">{item.name}</span>
            <span className="font-semibold text-foreground">${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <Separator className="my-4" />

      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="text-foreground">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Tax (10%)</span>
          <span className="text-foreground">${tax.toFixed(2)}</span>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-foreground">Total</span>
        <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
      </div>
    </Card>
  );
};

export default OrderSummary;
