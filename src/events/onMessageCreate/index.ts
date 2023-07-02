import { Client, DiscordAPIError } from "discord.js";
import type { Message } from "discord.js";

const onMessageCreate = async (BOT: Client, message: Message) => {
	if (message.author.bot) return;
	const { author, content, guild } = message;
	if (!guild) {
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

export default onMessageCreate;
