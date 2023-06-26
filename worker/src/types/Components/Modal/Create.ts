import type { MessageActionRow, ModalActionRowComponent } from 'discord.js';

export type CreateModalType = {
	id: string;
	title: string;
	actionRow: MessageActionRow<ModalActionRowComponent>[];
};
