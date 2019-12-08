import { Vec2 } from '../math';

export default class Snake {
  constructor(x = 0, y = 0) {
    this.direction = new Vec2(0, 1);
    this.tail = [new Vec2(x - 1, y), new Vec2(x, y), new Vec2(x + 1, y), new Vec2(x + 1, y + 1)];
    this.lenght = this.tail.length;
    this.head = this.tail[this.lenght - 1];
  }

  grow() {
    this.lenght += 1;
    const position = this.tail[0].get();
    const pice = new Vec2(position);
    this.tail.unshift(pice);
    this.head = this.tail[this.lenght - 1];
  }

  collide(food) {
    const { x: foodX, y: foodY } = food.position.get();
    const { x: snakeX, y: snakeY } = this.head.get();
    
    if (foodX === snakeX && foodY === snakeY) {
      this.grow();
      food.getRandomPosition()
    }
  }

  draw(context) {
    context.fillStyle = '#fff';

    this.tail.forEach(({ x, y }) => {
      context.fillRect(x, y, 1, 1);
    })
  }

  update(deltaTime) {
    const head = this.tail[this.lenght - 1];
    let prevPosition = head.get();
    head.add(this.direction);
    
    for (let i = this.lenght - 2; i >= 0; i--) {
      let temp = this.tail[i].get();
      this.tail[i].set(prevPosition);
      prevPosition = temp;
    }
  }
}