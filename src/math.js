export class Vec2 {
  constructor(x, y) {
    this.set({ x, y });
  }

  set({ x, y }) {
    this.x = x;
    this.y = y;
  }

  get() {
    return {
      x: this.x,
      y: this.y
    }
  }

  add({ x, y }) {
    this.x += x;
    this.y += y;
  }
}
