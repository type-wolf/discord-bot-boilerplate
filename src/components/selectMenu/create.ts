import { MessageSelectMenu, DiscordAPIError } from "discord.js";
import type { CreateSelectMenu } from "../../types/Components/SelectMenu/Create";

export const createSelectMenu = (selectMenuDatas: CreateSelectMenu) => {
	const { customId, disabled, maxValues, minValues, options, placeholder } = selectMenuDatas;
	try {
		const selectMenu = new MessageSelectMenu();
		if (customId) {
			selectMenu.setCustomId(customId ? customId : "Sample");
		}
		if (disabled) {
			selectMenu.setDisabled(disabled);
		}
		if (maxValues) {
			selectMenu.setMaxValues(maxValues);
		}
		if (minValues) {
			selectMenu.setMinValues(minValues);
		}
		if (options) {
			selectMenu.setOptions(options);
		}
		if (placeholder) {
			selectMenu.setPlaceholder(placeholder);
		}
		return selectMenu;
	} catch (e: unknown) {
		if (e instanceof DiscordAPIError) {
			return;
		}
		if (e instanceof Error) {
			return;
		}
	}
};
