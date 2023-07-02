import type { MessageReaction, PartialMessageReaction, User, PartialUser, Client } from "discord.js";

export type OnMessageReactionRemoveType = {
	BOT: Client;
	reaction: MessageReaction | PartialMessageReaction;
	user: User | PartialUser;
};
