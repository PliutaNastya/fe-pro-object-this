export const hotel = {
  quantityOfPlaces: 30,
  priceByPlace: 20,
  bankAccount: 0,
  guests: {},
  getLength: function () {
    return Object.keys(this.guests).length;
  },
  getActualFreePlace: function () {
    return this.quantityOfPlaces - this.getLength();
  },
  paidPerPlace: function () {
    return (this.bankAccount = this.getLength() * this.priceByPlace);
  },
  checkInGuest: function (firstName, lastName, money) {
    if (Object.keys(this.guests).length >= this.quantityOfPlaces) {
      return 'Sorry, we have not free spaces';
    } else if (money < this.priceByPlace) {
      return 'Sorry, you have not enough money';
    }
    return (this.guests[this.getLength()] = {
      firstName,
      lastName,
      money: money - this.priceByPlace,
    });
  },
};
