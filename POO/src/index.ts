class CompteBancaire {
  private solde: number;
  constructor() {
    this.solde = 0;
  }

  static convertEurosToFrancs = (montantEuros: number) =>
    montantEuros * 6.55957;

  getSolde = () => {
    return this.solde;
  };
  deposer = (montant: number) => {
    if (montant > 0) {
      this.solde += montant;
    }
  };
  retirer = (montant: number) => {
    if (montant > 0 && montant <= this.solde) {
      this.solde -= montant;
    } else {
      console.log("not enough money on account");
    }
  };
}

const compteKarim = new CompteBancaire();

compteKarim.retirer(100);

console.log(CompteBancaire.convertEurosToFrancs(10));

interface Vehicle {
  start(): void;
}

class Car implements Vehicle {
  start = () => {
    console.log("The car starts");
  };
}
class Bicycle implements Vehicle {
  start = () => {
    console.log("The bycicle starts");
  };
}

const race = (someRandomVehicle: Vehicle) => {
  someRandomVehicle.start();
};

const peugeot206: Car = new Car();

race(peugeot206);
