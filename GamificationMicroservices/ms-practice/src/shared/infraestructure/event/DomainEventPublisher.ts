import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { domain } from 'process';
import { DomainEvent } from '../../domain/event/DomainEvent';

export interface IDomainEventPublihser {
  publish(domainEvent: DomainEvent): void;
}

export class DomainEventPublisher implements IDomainEventPublihser {
  constructor(
    @Inject('NIVELATION_PUBLISHER') private readonly client: ClientProxy,
  ) {}

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  publish(domainEvent: DomainEvent): void {
    this.client.emit<any>(domainEvent._eventName, domainEvent._message);
  }
}
