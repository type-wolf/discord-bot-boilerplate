import { MessageReaction, User, DiscordAPIError } from "discord.js";
import type { OnMessageReactionAddType } from "../../types/Events/OnMessageReactionAdd";

const onMessageReactionAdd = async (datas: OnMessageReactionAddType) => {
	const { user, reaction } = datas;
	if (user.bot) return;
	if (!(user instanceof User)) {
		return;
	}
	if (!(reaction instanceof MessageReaction)) {
		return;
	}
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

export default onMessageReactionAdd;
