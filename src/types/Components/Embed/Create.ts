import type { EmbedAuthorData, EmbedFooterData } from "@discordjs/builders";
import type { ColorResolvable, EmbedFieldData, User } from "discord.js";

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

export type LogEmbed = {
	status: "成功" | "失敗" | "警告" | "注意";
	actionName: string;
	user: User;
	description?: string;
};
