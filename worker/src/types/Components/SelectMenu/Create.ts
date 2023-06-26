import type { MessageSelectOptionData } from 'discord.js';

export type CreateSelectMenu = {
	customId?: string;
	disabled?: boolean;
	maxValues?: number;
	minValues?: number;
	options?: MessageSelectOptionData[];
	placeholder?: string;
};
