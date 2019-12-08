import layerFactory from '../factories/layer';

export const backgroundLayer = (width, height) =>
  layerFactory(width, height, (context, { buffer, bufferContext }) => {
    bufferContext.fillStyle = '#000';
    bufferContext.fillRect(0, 0, width, height);
    context.drawImage(buffer, 0, 0);
  });