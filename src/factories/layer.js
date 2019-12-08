export default function layerFactory(width, height, drawFunc) {
  const buffer = document.createElement('canvas');
  buffer.width = width;
  buffer.height = height;

  const bufferContext = buffer.getContext('2d');

  return (context) => {
    drawFunc(context, { buffer, bufferContext });
  }
}