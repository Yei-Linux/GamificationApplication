import { Transport } from '@nestjs/microservices';

const rabbitmq = {
    development: {
        transport: Transport.RMQ,
        options: {
            urls: [`amqp://localhost:5672`],
            queue: 'my_queue',
            queueOptions: { durable: false },
        },
    },
    prod: {
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://localhost:5672`],
          queue: 'my_queue',
          queueOptions: { durable: false },
        },
    },
};

export { rabbitmq }