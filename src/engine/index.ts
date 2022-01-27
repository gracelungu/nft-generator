import { createCanvas, loadImage } from "canvas";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import metadata from "../constants/metadata.json";
import { iData } from "../redux/types/initialStates";

export type Size = {
  width: number;
  height: number;
};

export type Image = {
  layer?: string;
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

  isValid(): boolean {
    return (
      this.layers.length > 0 &&
      this.layers.every((layer) => layer.images.length > 0)
    );
  }

  setSize(size: Size) {
    this.size = size;
    this.canvas.width = size.width;
    this.canvas.height = size.height;
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

  async drawImage(imagePath: string, x?: number, y?: number) {
    const image = await loadImage(imagePath);
    this.ctx.drawImage(image, x || 0, y || 0);
  }

  async generateNFTPreview(images: Array<Image>) {
    const imgs = Array.isArray(images) ? images : [images];
    this.clearCanvas();
    const drawing = imgs?.map(async ({ path }) => {
      return this.drawImage(path, 0, 0);
    });
    await Promise.all(drawing);
  }

  async generateNFT(images: Array<Image>, fileName: string) {
    const imgs = Array.isArray(images) ? images : [images];
    const drawing = imgs.map(async ({ path }) => {
      return this.drawImage(path);
    });
    await Promise.all(drawing);
    await this.saveFileToZip(`${fileName}.png`, "Collection");
  }

  async saveFileToZip(fileName: string, path: string) {
    return await new Promise((resolve) => {
      this.canvas.toBlob((blob: any) => {
        this.jszip.file(`NFTCollection/${path}/${fileName}`, blob);
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
    const images = layers
      .map((layer) => ({
        ...layer,
        images: layer.images.map((image) => ({ ...image, layer: layer.name })),
      }))
      .map((layer) => layer.images);
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

  async generateBannerCollage(blobImage?: boolean) {
    if (!this.isValid()) return;

    this.jszip = new JSZip();
    const cartesianProduct = this.layersCartesianProduct(this.layers);
    const allImages = this.selectNRandomElements(
      cartesianProduct,
      cartesianProduct?.length > 50 ? 50 : cartesianProduct?.length
    );
    const gridSize = Math.ceil(Math.sqrt(allImages.length));

    this.canvas.width = this.size.width * gridSize;
    this.canvas.height = this.size.height * gridSize;

    let x = 0;
    let y = 0;
    for (let i = 0; i < allImages.length; i++) {
      for (let j = 0; j < allImages[i].length; j++) {
        await this.drawImage(allImages[i][j].path, x, y);
      }

      if (x >= this.size.width * gridSize) {
        x = 0;
        y += Number(this.size.height);
      } else {
        x += Number(this.size.width);
      }
    }

    return await new Promise((resolve) => {
      this.canvas.toBlob(async (blob: any) => {
        const img = (await this.blobToBase64(blob)) as string;
        this.preview = img;
        console.log(img);
        blobImage ? resolve(blob) : resolve(img);
      });
    });
  }

  async downloadBannerCollage() {
    if (!this.isValid()) return;

    this.jszip = new JSZip();

    const blobImage = await this.generateBannerCollage(true);
    await this.jszip.file(`NFTCollectionBanner/Banner/banner.png`, blobImage);

    this.jszip
      .generateAsync({ type: "blob" })
      .then((content: any) => {
        saveAs(content, "NFTCollectionBanner.zip");
      })
      .catch((err: any) => console.log(err));
  }

  async generateNFTs(data: iData, ipfsURI: string) {
    this.jszip = new JSZip();
    const cartesianProduct = this.layersCartesianProduct(this.layers);
    const selectedImages = this.selectNRandomElements(
      cartesianProduct,
      this.collectionSize
    );

    await Promise.all(
      selectedImages.map(async (images, index) => {
        await this.generateNFT(images, `${index}`);
        await this.generateMetaData(data, images, ipfsURI, index);
      })
    );

    this.jszip
      .generateAsync({ type: "blob" })
      .then((content: any) => {
        saveAs(content, "NFTCollection.zip");
      })
      .catch((err: any) => console.log(err));
  }

  async generateMetaData(
    data: iData,
    images: Image[],
    ipfsURI: string,
    index: number
  ) {
    const imgs = Array.isArray(images) ? images : [images];

    let dna = "";
    const attributes = imgs.map((image) => {
      const breakPoints = image.path.split(".");
      dna += breakPoints[breakPoints?.length - 2];
      return {
        trait_type: image.layer,
        value: image?.name?.split(".")[0],
      };
    });

    const metadata = {
      name: data.name,
      description: data.description,
      attributes: attributes,
      image: `ipfs://${ipfsURI.replace("ipfs://", "")}/${index}.png`,
      dna: Buffer.from(`${dna}`).toString("hex"),
      edition: 1,
      date: data?.date,
      engine: "NFTooze",
    };

    await this.jszip.file(
      `NFTCollection/Collection/${index}.json`,
      JSON.stringify(metadata)
    );

    return metadata;
  }
}

const engine = new Engine({ width: 374, height: 374 }, [], 1);

export default engine;
