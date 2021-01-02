export class DomainEvent {
  constructor(
    private eventId: string,
    private eventName: string,
    private ocurredOn: string,
    private message: any
  ) {}

  get _eventId(): string {
    return this.eventId;
  }

  get _eventName(): string {
    return this.eventName;
  }

  get _ocurredOn(): string {
    return this.ocurredOn;
  }

  get _message(): string {
    return this.message;
  }

  public static create(eventName: string, message: any) {
    return new DomainEvent(null,eventName,null,message);
  }
}
