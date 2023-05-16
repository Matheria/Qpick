import { makeAutoObservable } from "mobx";

const goods = [
  {
    id: 1,
    img: "./assets/Apple BYZ S8521.png",
    title: "Apple BYZ S8521",
    price: 2927,
    priceBeforeDiscount: 3527,
    rate: 4.7,
  },
  {
    id: 2,
    img: "./assets/Apple EarPods.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 3,
    img: "./assets/Apple EarPods Case.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 4,
    img: "./assets/Apple BYZ S8521.png",
    title: "Apple BYZ S8521",
    price: 2927,
    rate: 4.7,
  },
  {
    id: 5,
    img: "./assets/Apple EarPods.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 6,
    img: "./assets/Apple EarPods Case.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 7,
    img: "./assets/Apple AirPods.png",
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
    wireless: true,
  },
  {
    id: 8,
    img: "./assets/GERLAX GH-04.png",
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
    wireless: true,
  },
  {
    id: 9,
    img: "./assets/BOROFONE BO4.png",
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7,
    wireless: true,
  },
];

class Store {
  cart = {};

  constructor() {
    makeAutoObservable(this);
  }

  getCart() {
    return Object.values(this.cart).map((item) => item.item);
  }

  getWireless() {
    return goods.filter((item) => item.wireless);
  }

  getWired() {
    return goods.filter((item) => !item.wireless);
  }

  getCounter() {
    return Object.values(this.cart).reduce((res, item) => {
      return res + item.count;
    }, 0);
  }

  getTotalPriceById(id) {
    return this.getCountById(id) * this.cart[id].item.price;
  }

  getCountById(id) {
    return this.cart[id].count;
  }

  getTotalPrice() {
    return Object.values(this.cart).reduce((res, item) => {
      return res + this.getTotalPriceById(item.item.id);
    }, 0);
  }
}

export const store = new Store();
