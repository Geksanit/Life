class Event {
  sender: object;
  listeners: Array<(a, b) => void>;
  constructor(sender: any) {
    this.sender = sender;
    this.listeners = [];
  }
  attach(listener: (a, b) => void): void {
    this.listeners.push(listener);
  }
  notify(args: any): void {
    this.listeners.forEach((listener) => {
      listener(this.sender, args);
    });
  }
}
export default Event;
