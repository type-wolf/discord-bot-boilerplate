import { DiscordAPIError } from 'discord.js';
import type { GuildMember } from 'discord.js';

const onGuildMemberAdd = async (guildMember: GuildMember) => {
	const { user, guild } = guildMember;
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

export default onGuildMemberAdd;
