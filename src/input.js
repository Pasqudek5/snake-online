import KeyboardHandler from './KeyboardHandler';

export default function handleInput(entity) {
  const input = new KeyboardHandler();

  input.addMapping('KeyA', state => {
    entity.direction.set({ x: -1, y: 0 });
  });

  input.addMapping('KeyD', state => {
    entity.direction.set({ x: 1, y: 0 });
  });

  input.addMapping('KeyS', state => {
    entity.direction.set({ x: 0, y: 1 });
  });

  input.addMapping('KeyW', state => {
    entity.direction.set({ x: 0, y: -1 });
  });

  return input;
}