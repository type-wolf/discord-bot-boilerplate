import type { MessageButtonStyleResolvable, EmojiIdentifierResolvable } from 'discord.js';

export type CreateButtonType = {
	customId?: string;
	style: MessageButtonStyleResolvable;
	label: string;
	url?: string;
	emoji?: string | EmojiIdentifierResolvable;
	disabled?: true | false;
};
