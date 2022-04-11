abstract class Figure {
  constructor() {}

  abstract perimeter(): number;
  abstract area(): number;
}

class Rectangle extends Figure {
    constructor(
        public width: number,
        public heigth: number,
    ) {
      super();
  }

  perimeter(): number {
      return 2 * (this.width + this.heigth);
  };
  area(): number {
      return this.width * this.heigth;
  };
}

class Triangle extends Figure {
  constructor(
      public firstCathetus: number, 
      public secondCathetus: number,
      public hypotenuse: number,
      ) {
      super();
    }

  perimeter(): number {
      return this.firstCathetus + this.secondCathetus + this.hypotenuse;
  };
  area(): number {
      if (!(
          this.firstCathetus + this.secondCathetus > this.hypotenuse &&
          this.firstCathetus + this.hypotenuse > this.secondCathetus &&
          this.secondCathetus + this.hypotenuse > this.firstCathetus
      )) {
        throw new Error("Invalid data");
      };
      const semiPerimeter: number = (this.firstCathetus + this.secondCathetus + this.hypotenuse) / 2;
      const area: number = Math.sqrt((semiPerimeter *
          (semiPerimeter - this.firstCathetus) *
          (semiPerimeter - this.secondCathetus) *
          (semiPerimeter - this.hypotenuse)));
      return area;
  };
}

class Circle extends Figure {
    constructor(
        public radius: number,
    ) {
      super();
    }

  perimeter(): number {
      return 2 * Math.PI * this.radius;
  };
  area(): number {
      return Math.PI * Math.pow(this.radius, 2);
  };
}