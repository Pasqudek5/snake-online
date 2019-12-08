export default class TileCollider {
  constructor(matrix) {
    this.matrix = matrix;
  }

  collide(entity) {
    const position = entity.head.get();

    const value = this.matrix.get(position);

    if (value && value.type === 'food') {
      entity.grow();

      const { type, food } = value;
      

      this.matrix.remove(position);
      this.matrix.set({
        x: 15,
        y: 15
      }, {
        type,
        food
      });
      food.set({ x: 15, y: 15 });
      
    }
  }
}
