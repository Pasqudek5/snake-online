import TileCollider from './TileCollider';

export default class Level {
  constructor(entity, food, compositor) {
    this.entity = entity;
    this.food = food;
    this.compositor = compositor;
  }

  update(context, deltaTime) {
    this.compositor.update(context);

    this.entity.update(deltaTime);
    this.entity.collide(this.food);
    
    this.entity.draw(context);
    this.food.draw(context);
  }
}