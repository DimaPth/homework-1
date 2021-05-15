const concat = (a: string, b: string): string => {
  return a + b;
};

concat('Hello ', 'World');

interface MyHometask {
  howIDoIt: string;
  simeArray: (string | number)[];
  withData?: MyHometask[];
}

const myHometask: MyHometask = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

interface MyArray<T> {
  [N: number]: T;

  reduce<U>(fn: (el: U, el2: T) => U, init: U): U;
}

const tsArray: MyArray<number> = [1, 2, 3, 4];

tsArray.reduce((a, b) => a + b, 0);
