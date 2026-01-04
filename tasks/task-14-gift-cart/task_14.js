
const PROMO_CODES = {
  PROMO10: 0.10,
  PROMO25: 0.25,
  SANTA50: 0.50
};


class GiftCart {
  constructor() {
    this.items = {}; 
    this.discount = 0; 
  }

  add(id, price) {
    if (price < 0) return;       
    if (!this.items[id]) {
      this.items[id] = price;
    }
  }

  remove(id) {
    delete this.items[id];
  }

  applyDiscount(code) {
    if (PROMO_CODES[code]) {
      this.discount = PROMO_CODES[code];
    }
  }

  total() {
    let sum = Object.values(this.items).reduce((a, b) => a + b, 0);
    return sum * (1 - this.discount);
  }

  clear() {
    this.items = {};
    this.discount = 0;
  }

  list() {
    return Object.entries(this.items).map(([id, price]) => ({ id, price }));
  }
}

const cart = new GiftCart();

cart.add("train", 30);
cart.add("doll", 20);
cart.applyDiscount("PROMO10");

document.getElementById("cart-output").textContent = `Total after PROMO10: ${cart.total()}`; 

cart.remove("train");

document.getElementById("cart-output").textContent += ` | Total after removing train: ${cart.total()}`;

cart.add("teddy", 25);
cart.list();   
cart.clear(); 
