/* eslint-disable prettier/prettier */
import { Notification as PrismaNotification } from '@prisma/client'
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';

export class PrismaNotificationMapper {
    static toPrisma(notification: Notification) {
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt,
        };
    }

    static toDomain(prismaNotification: PrismaNotification): Notification {
        return new Notification({
            category: prismaNotification.category,
            content: new Content(prismaNotification.content),
            recipientId: prismaNotification.recipientId,
            readAt: prismaNotification.readAt,
            canceledAt: prismaNotification.canceledAt,
            createdAt: prismaNotification.createdAt,
        }, prismaNotification.id)
    }
}
