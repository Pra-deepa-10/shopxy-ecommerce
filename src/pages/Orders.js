import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import "./Orders.css";

function Orders() {

  const { orders } = useContext(OrderContext);

  return (
    <div className="orders-page">

      <h1>My Orders</h1>

      {orders.length === 0 ? (

        <p className="no-orders">
          No orders placed yet 🛒
        </p>

      ) : (

        orders.map(order => {

          const total = order.items.reduce(
            (sum, item) =>
              sum + item.price * item.quantity,
            0
          );

          return (

            <div key={order.id} className="order-card">

              <div className="order-header">

                <div>
                  <div className="order-id">
                    Order #{order.id}
                  </div>

                  <div className="order-date">
                    {order.date}
                  </div>
                </div>

                <p style={{ color: "#22c55e" }}>
                  ✅ {order.status}
                </p>

              </div>

              <div className="order-items">
                {order.items.map(item => (
                  <div key={item.id} className="order-item">

                    <img src={item.image} alt={item.title}/>

                    <div className="order-details">
                      <h4>{item.title}</h4>
                      <p>${item.price} × {item.quantity}</p>
                    </div>

                  </div>

                ))}

              </div>

              <div className="order-total">
                Total: ${total.toFixed(2)}
              </div>

            </div>

          );
        })

      )}

    </div>
  );
}

export default Orders;