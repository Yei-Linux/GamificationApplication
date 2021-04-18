import { MouseEventHandler } from "react";

export interface IEvents {
  onClick?: MouseEventHandler<any>;
  onChange?: MouseEventHandler<any>;
  onMouseEnter?: MouseEventHandler<any>;
  onMouseLeave?: MouseEventHandler<any>;
  onMouseMove?: MouseEventHandler<any>;
}
