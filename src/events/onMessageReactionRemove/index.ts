import { MessageReaction, User, DiscordAPIError } from "discord.js";
import type { OnMessageReactionRemoveType } from "../../types/Events/OnMessageReactionRemove";

const onMessageReactionRemove = async (datas: OnMessageReactionRemoveType) => {
	const { user, reaction } = datas;
	if (user.bot) return;
	if (!(user instanceof User)) {
		return;
	}
	if (!(reaction instanceof MessageReaction)) {
		return;
	}
	const { emoji, message } = reaction;
	try {
		return;
	} catch (e: unknown) {
		if (e instanceof DiscordAPIError) {
			switch (e.code) {
				case 0: {
					return;
				}
				case 1: {
					return;
				}
				default: {
					return;
				}
			}
		}
		if (e instanceof Error) {
			switch (e.name) {
				case `sample1`: {
					return;
				}
				case `sample2`: {
					return;
				}
				default: {
					return;
				}
			}
		}
	}
};

export default onMessageReactionRemove;
