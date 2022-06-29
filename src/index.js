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
    return (this.bankAccount = this.getLength() * this.priceByPlace);
  },
  checkInGuest(firstName, lastName, money) {
    if (this.getActualFreePlace() <= 0) {
      return 'Sorry, we have not free spaces';
    }
    if (money < this.priceByPlace) {
      return 'Sorry, you have not enough money';
    }
    return (this.guests[this.getLength()] = {
      firstName,
      lastName,
      money: money - this.priceByPlace,
    });
    this.paidPerPlace();
  },
};
