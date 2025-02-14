export const hotel = {
  quantityOfPlaces: 30,
  priceByPlace: 20,
  bankAccount: 0,
  guests: {},
  getLength() {
    return Object.keys(this.guests).length;
  },
  getActualFreePlace() {
    return this.quantityOfPlaces - this.getLength();
  },
  paidPerPlace() {
    this.bankAccount = this.getLength() * this.priceByPlace;
  },
  checkInGuest: function (firstName, lastName, money) {
    if (this.getActualFreePlace() <= 0) {
      return 'Sorry, we have not free spaces';
    }
    if (money < this.priceByPlace) {
      return 'Sorry, you have not enough money';
    }
    this.guests[this.getLength()] = {
      firstName,
      lastName,
      money: money - this.priceByPlace,
    };
    this.paidPerPlace();

    return this.guests[this.getLength() - 1];
  },
};
