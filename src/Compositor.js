export default class Compositor {
  constructor() {
    this.layers = [];
  }

  addLayer(layer) {
    this.layers.push(layer)
  }

  update(context) {
    this.layers.forEach(layer => {
      layer(context)
    })
  }
}