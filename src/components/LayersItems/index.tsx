import React from "react";
import Input from "../common/Input";
import styles from "./index.module.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import InitialState from "@/src/redux/types/initialStates";
import {
  createLayers,
  setSelectedLayer,
  updateLayers,
} from "@/src/redux/actions/layers/layers";

const typedUseSelectorHook: TypedUseSelectorHook<InitialState> = useSelector;

const LayersItems = () => {
  const dummyLayer = {
    name: "Layer",
    position: new Date().getTime(),
    images: [],
  };

  const state = typedUseSelectorHook((state) => state);
  const {
    layers: { items: layers },
  } = state;
  const dispatch = useDispatch();

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    const {
      source: { index: sourceIndex },
      destination: { index: destinationIndex },
    } = result;
    const movedLayers = [...layers];
    const [layer] = movedLayers.splice(sourceIndex, 1);
    movedLayers.splice(destinationIndex, 0, layer);
    updateLayers(movedLayers)(dispatch);
  };

  const removeLayer = (index: number) => {
    if (layers.length === 1) {
      return updateLayers([dummyLayer])(dispatch);
    }
    updateLayers(layers.filter((_i, layerIndex) => layerIndex !== index))(
      dispatch
    );
  };

  console.log(layers);

  return (
    <div
      className={styles.container}
      style={{ minHeight: `${100 * state.layers.items.length}px` }}
    >
      <div className={styles.container__title}>Layers</div>
      <div className={styles.container__subtitle}>
        Drag and drop to adjust the position
      </div>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="layers">
          {(provided) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={styles.container__items}
              >
                {layers.map((layer, index) => (
                  <Draggable
                    key={layer.position}
                    draggableId={String(layer.position)}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className={`${styles.container__items__wrapper} ${styles.container__items__draggable}`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Input
                          placeholder="Layer name"
                          value={layer.name}
                          onFocus={() => setSelectedLayer(index)(dispatch)}
                          onChange={({
                            target: { value },
                          }: Record<string, any>) =>
                            updateLayers(
                              layers.map((layer, layerIndex) =>
                                layerIndex === index
                                  ? { ...layer, name: value }
                                  : layer
                              )
                            )(dispatch)
                          }
                          className={styles.container__items__item}
                        />
                        <div
                          className={styles.container__items__remove}
                          onClick={() => removeLayer(index)}
                        >
                          Remove
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>

      <div
        onClick={() =>
          createLayers({ ...dummyLayer, position: new Date().getTime() })(
            dispatch
          )
        }
        className={styles.container__items__button}
      >
        + New Layer
      </div>
    </div>
  );
};

export default LayersItems;
