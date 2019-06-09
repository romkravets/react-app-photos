export interface IAction<T, D> {
   type:T;
   payload?: D
}