import {
  ADD_LAYER_IMAGE,
  CREATE_LAYER,
  SET_SELECTED_LAYER,
  UPDATE_LAYERS,
  REMOVE_LAYER_IMAGE,
  UPDATE_RARITY,
  DELETE_IMAGE,
} from "@/src/redux/constants/layers/layers";
import { Layer } from "@/src/engine";

type state = {
  items: Array<Layer>;
};

export default (state: state, { type, payload }: any) => {
  switch (type) {
    case CREATE_LAYER:
      state.items.push(payload);
      return {
        ...state,
        items: state.items,
      };

    case DELETE_IMAGE:
      const layerImages = [...state.items[payload.layerIndex].images].filter(
        (item, index) => {
          if (index === payload.imageIndex) {
            return false;
          }
          return true;
        }
      );

      const items = [...state.items];
      items[payload.layerIndex].images = layerImages;

      return {
        ...state,
        items,
      };

    case UPDATE_LAYERS:
      return { items: payload };
    case SET_SELECTED_LAYER:
      return { ...state, selectedLayer: payload };

    case ADD_LAYER_IMAGE:
      const { index: indexToAdd, image: imageToAdd } = payload;
      const itemsAdd = [...state.items];
      itemsAdd[indexToAdd].images.push(imageToAdd);
      const imagesLength = itemsAdd[indexToAdd].images.length;
      const rarityAmount = Number(100 / imagesLength).toFixed(2);
      const newImagesAdd = itemsAdd[indexToAdd].images.map((image) => {
        return { ...image, rarity: rarityAmount };
      });

      itemsAdd[indexToAdd].images = newImagesAdd;

      return { ...state, items: itemsAdd };

    case REMOVE_LAYER_IMAGE:
      const { index: indexToRemove, image: imageToRemove } = payload;
      const itemsRemove = [...state.items];
      const newStateItems = itemsRemove[indexToRemove].images.filter(
        (image) => image.path !== imageToRemove.path
      );
      return { ...state, items: newStateItems };

    case UPDATE_RARITY:
      const {
        index: indexToUpdate,
        imageIndex,
        rarity: rarityToUpdate,
      } = payload;
      const itemsUpdate = [...state.items];

      const newImages = itemsUpdate[indexToUpdate].images.map(
        (image, index) => {
          if (index === imageIndex) {
            return { ...image, rarity: rarityToUpdate };
          }

          return image;
        }
      );

      itemsUpdate[indexToUpdate].images = newImages;

    default:
      return null;
  }
};
