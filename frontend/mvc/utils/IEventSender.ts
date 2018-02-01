interface IEventSender {
  attach(listener: (a, b) => void): void;
  notify(args: object): void;
}
export default IEventSender;
