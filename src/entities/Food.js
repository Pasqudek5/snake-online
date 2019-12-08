import { Vec2 } from '../math';

export default class Food {
  constructor() {
    this.position = new Vec2(2, 2);
    this.power = 2;
  }

  getRandomPosition() {
    const x = Math.floor(Math.random() * 20);
    const y = Math.floor(Math.random() * 20);
    
    this.position.set({ x, y });
  }
  
  draw(context) {
    const { x, y } = this.position;
    
    context.fillStyle = '#f00';
    context.fillRect(x, y, 1, 1);
  }
  
  update() {}
}