// Question #1: Shipping Cost Calculator

function calculateShippingCost(orders) {
  // เริ่มเขียนโค้ดตรงนี้
  let text = ``;
  orders.forEach(element => {
    let elementId = element['orderId'];
    let elementTotal = element['total'];
    let cost = 0;

    if(elementTotal >= 6000){
      cost = 'Shipping is free.';
    }else if(elementTotal >= 3000){
      cost = 'Shipping cost is 250 Baht.';
    }else{
      cost = 'Shipping cost is 500 Baht.';
    }

    text += `Order ${elementId}: ${cost}\n`
    
  });

  return text;
}

// ตัวอย่างการใช้งาน
const orders = [
  {
    orderId: 1,
    total: 6000,
  },
  {
    orderId: 2,
    total: 3000,
  },
  {
    orderId: 3,
    total: 150,
  },
];

console.log(calculateShippingCost(orders));
// Order Id 1: "Shipping is free."
// Order Id 2: "Shipping cost is 250 Baht."
// Order Id 3: "Shipping cost is 500 Baht."
