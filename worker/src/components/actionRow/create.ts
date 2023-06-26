import { MessageActionRow, ModalActionRowComponent, DiscordAPIError } from 'discord.js';
import { MessageComponentsType, ModalComponentsType } from '../../types/Components/ActionRow/Add';

export const addMessageActionRow = (components: MessageComponentsType) => {
	const actionRow = new MessageActionRow();
	try {
		if (Array.isArray(components)) {
			actionRow.addComponents(...components);
		} else {
			actionRow.addComponents(components);
		}
		return actionRow;
	} catch (e: unknown) {
		if (e instanceof DiscordAPIError) {
			return undefined;
		}
		if (e instanceof Error) {
			return undefined;
		}
	}
};

export const addModalActionRow = (components: ModalComponentsType) => {
	const actionRow = new MessageActionRow<ModalActionRowComponent>();
	try {
		if (Array.isArray(components)) {
			actionRow.addComponents(...components);
		} else {
			actionRow.addComponents(components);
		}
		return actionRow;
	} catch (e: unknown) {
		if (e instanceof DiscordAPIError) {
			return undefined;
		}
		if (e instanceof Error) {
			return undefined;
		}
	}
};
