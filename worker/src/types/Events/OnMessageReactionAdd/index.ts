import type { Client, User, MessageReaction, PartialMessageReaction, PartialUser } from 'discord.js';

export type OnMessageReactionAddType = {
	BOT: Client;
	reaction: MessageReaction | PartialMessageReaction;
	user: User | PartialUser;
};
