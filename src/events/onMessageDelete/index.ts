import { Message, DiscordAPIError } from "discord.js";
import type { Client, PartialMessage } from "discord.js";

const onMessageDelete = async (BOT: Client, message: Message | PartialMessage) => {
	if (!(message instanceof Message)) {
		return;
	}
	const { author, content, reactions } = message;
	if (message.author.bot) return;
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

export default onMessageDelete;
