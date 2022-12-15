/* eslint-disable prettier/prettier */

import { Notification, NotificationProps } from "@application/entities/notification";
import { Content } from "@application/entities/content";

type Override = Partial<NotificationProps>

export function makeNotification(override: Override = {}) {
    return new Notification({
        content: new Content('Nova Solicitação de Amizade.'),
        category: 'social',
        recipientId: 'recipient-1',
        ...override,
    })
}