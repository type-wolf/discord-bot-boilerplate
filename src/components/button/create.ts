import { MessageButton, DiscordAPIError } from "discord.js";
import type { CreateButtonType } from "../../types/Components/Button/Create";

const createButton = (datas: CreateButtonType) => {
	try {
		const { customId, style, label, url, emoji, disabled } = datas;
		const button = new MessageButton();
		if (customId) {
			button.setCustomId(customId);
		}
		button.setStyle(style);
		button.setLabel(label);
		if (url) {
			button.setURL(url);
		}
		if (emoji) {
			button.setEmoji(emoji);
		}
		if (disabled) {
			button.setDisabled(disabled);
		}
		return button;
	} catch (e: unknown) {
		if (e instanceof DiscordAPIError) {
			return undefined;
		}
		if (e instanceof Error) {
			return undefined;
		}
	}
};

export const createButtons = (datas: CreateButtonType[]) => {
	try {
		const buttons = datas.map((data) => createButton(data));
		const newButtons = buttons.filter((button) => button !== undefined) as MessageButton[];
		return newButtons;
	} catch (e: unknown) {
		if (e instanceof DiscordAPIError) {
			return undefined;
		}
		if (e instanceof Error) {
			return undefined;
		}
	}
};

export default createButton;
