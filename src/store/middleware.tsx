import { Middleware } from 'redux'

export const logger: Middleware = store => next => action => {
  const result = next(action)

  return result
}

/*
export interface Middleware<
  DispatchExt = {},
  S = any,
  D extends Dispatch = Dispatch
> {
  (api: MiddlewareAPI<D, S>): (
    next: Dispatch<AnyAction>
  ) => (action: any) => any
}
*/
