import { MessageActionRow, ModalActionRowComponent, DiscordAPIError } from "discord.js";
import { ComponentsType, TextInputComponents } from "../../types/Components/ActionRow/Add";

export const addMessageActionRow = (components: ComponentsType) => {
	const actionRow = new MessageActionRow();
	try {
		actionRow.addComponents(...components);
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

export const addModalActionRow = (components: TextInputComponents) => {
	const actionRow = new MessageActionRow<ModalActionRowComponent>();
	try {
		actionRow.addComponents(...components);
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
