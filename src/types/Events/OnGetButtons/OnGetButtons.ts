import type { ButtonInteraction, Guild, User } from "discord.js";

export type OnGetButtonType = {
	interaction: ButtonInteraction;
	user: User;
	guild: Guild;
};
