export default class Building {
  constructor(sqft) {
    if (new.target !== Building) {
      this.evacuationWarningMessage();
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  /* eslint-disable-next-line class-methods-use-this */
  evacuationWarningMessage() {
    throw new TypeError('Class extending Building must override evacuationWarningMessage');
  }
}
