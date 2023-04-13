import { type ReactElement } from "react";

export type Children<T = {}> = T & { children?: ReactElement };
