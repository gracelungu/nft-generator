import fs from "fs";
import { createCanvas, loadImage } from "canvas";

type Size = {
  width: number;
  height: number;
};

type Image = {
  path: string;
  rarity: number;
};

type Layer = {
  position: number;
  name: string;
  images: Array<Image>;
};

class Engine {
  layers: Array<Layer>;
  size: Size;
  ctx: any;
  collectionSize: number;

  constructor(size: Size, layers: Array<Layer>, collectionSize: number) {
    this.size = size;
    this.layers = layers;
    this.collectionSize = collectionSize;

    const canvas = createCanvas(size.width, size.height);
    this.ctx = canvas.getContext("2d");
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.size.width, this.size.height);
  }

  async drawImage(imagePath: string) {
    const image = await loadImage(imagePath);
    this.ctx.drawImage(image, 0, 0);
  }

  async generateNFT(images: Array<Image>, fileName: string) {
    const drawing = images.map(async ({ path }) => {
      return this.drawImage(path);
    });
    await Promise.all(drawing);
    await this.saveCanvasFile(`${fileName}.png`);
    this.clearCanvas();
  }

  async saveCanvasFile(fileName: string) {
    return fs.writeFileSync(fileName, this.ctx.canvas.toBuffer("image/png"));
  }

  layersCartesianProduct(layers: Array<Layer>): Array<Array<Image>> {
    const images = layers.map((layer) => layer.images);
    return images.reduce((a, b) =>
      a.flatMap((d) => b.map((e) => [d, e].flat()))
    );
  }

  selectNRandomElements(
    array: Array<Array<Image>>,
    n: number
  ): Array<Array<Image>> {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

  generateNFTs() {
    const cartesianProduct = this.layersCartesianProduct(this.layers);
    const selectedImages = this.selectNRandomElements(
      cartesianProduct,
      this.collectionSize
    );
    selectedImages.forEach((images, index) => {
      this.generateNFT(images, `${index}`);
    });
  }
}

export default Engine;
