import { createCanvas, loadImage } from "canvas";
import { saveAs } from "file-saver";
import JSZip from "jszip";

export type Size = {
  width: number;
  height: number;
};

export type Image = {
  name: string;
  path: string;
  rarity: number;
};

export type Layer = {
  position: number;
  name: string;
  images: Array<Image>;
};

class Engine {
  layers: Array<Layer>;
  size: Size;
  ctx: any;
  collectionSize: number;
  canvas: any;
  preview: string;
  jszip: any;

  constructor(size: Size, layers: Array<Layer>, collectionSize: number) {
    this.size = size;
    this.layers = layers;
    this.collectionSize = collectionSize;
    this.preview = "";
    this.jszip = new JSZip();

    this.canvas = createCanvas(size.width, size.height);
    this.ctx = this.canvas.getContext("2d");
  }

  setSize(size: Size) {
    this.size = size;
  }

  setLayers(layers: Array<Layer>) {
    this.layers = layers;
  }

  setCollectionSize(collectionSize: number) {
    this.collectionSize = collectionSize;
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.size.width, this.size.height);
  }

  async drawImage(imagePath: string) {
    const image = await loadImage(imagePath);
    this.ctx.drawImage(image, 0, 0);
  }

  async generateNFTPreview(images: Array<Image>) {
    this.clearCanvas();
    const drawing = images.map(async ({ path }) => {
      return this.drawImage(path);
    });
    await Promise.all(drawing);
  }

  async generateNFT(images: Array<Image>, fileName: string) {
    const drawing = images.map(async ({ path }) => {
      return this.drawImage(path);
    });
    await Promise.all(drawing);
    await this.saveFileToZip(fileName);
  }

  async saveFileToZip(fileName: string) {
    return await new Promise((resolve) => {
      this.canvas.toBlob((blob: any) => {
        this.jszip.file(`NFTCollection/${fileName}.png`, blob);
        this.clearCanvas();
        resolve(true);
      });
    });
  }

  async saveCanvasFile(fileName: string) {
    this.canvas.toBlob(async (blob: any) => {
      saveAs(blob, `${fileName}`);
    });
  }

  async generatePreview() {
    return await new Promise((resolve) => {
      this.canvas.toBlob(async (blob: any) => {
        const img = (await this.blobToBase64(blob)) as string;
        this.preview = img;
        resolve(img);
      });
    });
  }

  blobToBase64(blob: any) {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise((resolve) => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
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

  async generateNFTs() {
    this.jszip = new JSZip();
    const cartesianProduct = this.layersCartesianProduct(this.layers);
    const selectedImages = this.selectNRandomElements(
      cartesianProduct,
      this.collectionSize
    );

    await Promise.all(
      selectedImages.map(async (images, index) => {
        return await this.generateNFT(images, `${index}`);
      })
    );

    this.jszip
      .generateAsync({ type: "blob" })
      .then((content: any) => {
        saveAs(content, "NFTCollection.zip");
      })
      .catch((err: any) => console.log(err));
  }
}

const engine = new Engine({ width: 374, height: 374 }, [], 1);

export default engine;
