import IEventSender from './IEventSender';

class EventSender<T> implements IEventSender<T> {
  sender: object;
  listeners: Array<(a: object, b: T) => void>;
  constructor(sender: object) {
    this.sender = sender;
    this.listeners = [];
  }
  attach(listener: (a: object, b: T) => void): void {
    this.listeners.push(listener);
  }
  notify(args: T): void {
    this.listeners.forEach((listener) => {
      listener(this.sender, args);
    });
  }
}

export default EventSender;
