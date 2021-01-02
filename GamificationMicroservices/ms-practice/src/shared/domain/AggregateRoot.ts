import { DomainEvent } from "./event/DomainEvent";

export abstract class AggregateRoot {
    private domainEvents : DomainEvent[];

    protected record(domainEvent : DomainEvent) : void{
        this.domainEvents.push(domainEvent);
    }

    public pullDomainEvents() : DomainEvent[]{
        return this.domainEvents;
    }
}