interface IEventSender<T> {
  attach(listener: (a: object, b: T) => void): void;
  notify(args: T): void;
}
export default IEventSender;
