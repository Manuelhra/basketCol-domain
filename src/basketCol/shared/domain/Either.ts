export class Either<L, R> {
  private constructor(
    public readonly isLeft: boolean,
    public readonly isRight: boolean,
    private readonly _left: () => L,
    private readonly _right: () => R,
  ) {}

  static left<L, R>(value: L): Either<L, R> {
    return new Either(true, false, () => value, () => {
      throw new Error('Cannot call right() on a left value');
    });
  }

  static right<L, R>(value: R): Either<L, R> {
    return new Either(false, true, () => {
      throw new Error('Cannot call left() on a right value');
    }, () => value);
  }

  left(): L {
    return this._left();
  }

  right(): R {
    return this._right();
  }
}
