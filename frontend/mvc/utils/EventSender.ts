class EventSender {
  sender: object;
  listeners: Array<(a, b) => void>;
  constructor(sender: object) {
    this.sender = sender;
    this.listeners = [];
  }
  attach(listener: (a, b) => void): void {
    this.listeners.push(listener);
  }
  notify(args: object): void {
    this.listeners.forEach((listener) => {
      listener(this.sender, args);
    });
  }
}
export default EventSender;
