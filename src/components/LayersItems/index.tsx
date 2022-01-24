import React from "react";
import Input from "../common/Input";
import styles from "./index.module.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function LayersItems() {
  const dummyLayer = { name: "Layer", id: new Date().getTime() };
  const [layers, setLayers] = React.useState<Array<Record<string, any>>>([
    dummyLayer,
  ]);

  const handleOnDragEnd = (result: any) => {
    const {
      source: { index: sourceIndex },
      destination: { index: destinationIndex },
    } = result;
    const movedLayers = [...layers];
    const layer = movedLayers.splice(sourceIndex, 1)[0];
    movedLayers.splice(destinationIndex, 0, layer);
    setLayers(movedLayers);
  };

  return (
    <div className={styles.container}>
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
                    key={layer.id}
                    draggableId={layer.name}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className={styles.container__items__wrapper}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Input
                          placeholder="Layer name"
                          value={layer.name}
                          onChange={({
                            target: { value },
                          }: Record<string, any>) =>
                            setLayers(
                              layers.map((layer, layerIndex) =>
                                layerIndex === index
                                  ? { ...layer, name: value }
                                  : layer
                              )
                            )
                          }
                          className={styles.container__items__item}
                        />
                        <div
                          className={styles.container__items__remove}
                          onClick={() =>
                            setLayers(
                              layers.filter(
                                (_i, layerIndex) => layerIndex !== index
                              )
                            )
                          }
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
          setLayers([...layers, { ...dummyLayer, id: new Date().getTime() }])
        }
        className={styles.container__items__button}
      >
        + New Layer
      </div>
    </div>
  );
}

export default LayersItems;
