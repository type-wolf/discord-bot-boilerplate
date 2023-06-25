import type { EmbedAuthorData, EmbedFooterData } from "@discordjs/builders";
import type { ColorResolvable, EmbedFieldData } from "discord.js";

export type CreateEmbed = {
	title: string;
	description?: string;
	color?: ColorResolvable;
	author?: EmbedAuthorData;
	fields?: EmbedFieldData[] | EmbedFieldData[][];
	footer?: EmbedFooterData;
	imageUrl?: string;
	url?: string;
	timestamp?: number | Date;
	thumbnailUrl?: string;
};
