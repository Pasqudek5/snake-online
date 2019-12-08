import Level from './Level';
import Timer from './Timer';
import Compositor from './Compositor'

// Handlers
import handleInput from './input';

// Entities
import Snake from './entities/Snake';
import Food from './entities/Food';

// Layers
import { backgroundLayer } from './layers/background';

const main = (canvas) => {
  const context = canvas .getContext('2d');
  const food = new Food();
  
  const snake = new Snake(10, 10);
  const level = new Level(snake, food, new Compositor());

  const timer = new Timer(0.2);
  const input = handleInput(snake);

  input.listenTo(window);

  context.scale(20, 20);

  level.compositor.addLayer(backgroundLayer(canvas.width, canvas.height))

  timer.update = (deltaTime) => {
    level.update(context, deltaTime);
  }
  
  timer.start()
}

const canvas = document.getElementById('game');
main(canvas);
