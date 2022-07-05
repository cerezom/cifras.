import { BoardState } from "main/entities/board/domain/model/board-state";
import { RootState } from "main/shared/state/store";
import { PowerBIEmbed } from "powerbi-client-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventHandlersMaps } from "../helpers/eventHandlersMaps";
import { useQuery } from "../query/useQuery";

export const BoardPowerBI = () => {
  let query = useQuery();
  const dispatch = useDispatch();

  const tableroState: BoardState = useSelector((state: RootState) => state.tablero);

  useEffect(() => {
    dispatch.tablero.obtenerInformacionTablero(`${query.get("tablerourl")}`);
  }, [dispatch.tablero, query, tableroState]);

  return (
    <>
      <PowerBIEmbed
        embedConfig={tableroState.informacionTablero}
        eventHandlers={eventHandlersMaps}
        cssClassName={"report-style-class"}
      />
    </>
  );
};
