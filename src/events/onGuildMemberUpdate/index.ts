import { DiscordAPIError } from "discord.js";
import type { GuildMember, PartialGuildMember } from "discord.js";

const onGuildMemberUpdate = async (oldMember: GuildMember | PartialGuildMember, newMember: GuildMember) => {
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

export default onGuildMemberUpdate;
