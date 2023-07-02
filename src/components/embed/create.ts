import { MessageEmbed, DiscordAPIError } from "discord.js";
import type { EmbedAuthorData } from "@discordjs/builders";
import type { CreateEmbed, LogEmbed } from "../../types/Components/Embed/Create";
import getDatetime from "../../utils/getDatetime";
import { WHITE_CHECK_MARK, ROTATING_LIGHT, WARNING } from "../../constants/emoji";

const createEmbed = (datas: CreateEmbed) => {
	const { title, description, color, author, imageUrl, url, fields, footer, timestamp, thumbnailUrl } = datas;
	try {
		const embed = new MessageEmbed();
		embed.setTitle(title);
		if (description) {
			embed.setDescription(description);
		}
		if (color) {
			embed.setColor(color);
		} else {
			embed.setColor("RANDOM");
		}
		if (author) {
			embed.setAuthor(author);
		}
		if (imageUrl) {
			embed.setImage(imageUrl);
		}
		if (url) {
			embed.setURL(url);
		}
		if (fields) {
			embed.addFields(...fields);
		}
		if (footer) {
			embed.setFooter(footer);
		}
		if (timestamp) {
			embed.setTimestamp(timestamp);
		}
		if (thumbnailUrl) {
			embed.setThumbnail(thumbnailUrl);
		}
		return embed;
	} catch (e: unknown) {
		if (e instanceof DiscordAPIError) {
			return undefined;
		}
		if (e instanceof Error) {
			return undefined;
		}
	}
};

export const createLogEmbed = (datas: LogEmbed) => {
	const { status, actionName, user, description } = datas;
	const title =
		status === "成功"
			? `${WHITE_CHECK_MARK}成功${WHITE_CHECK_MARK}`
			: status === "失敗"
			? `${ROTATING_LIGHT}エラー${ROTATING_LIGHT}`
			: status === "警告"
			? `${ROTATING_LIGHT}警告${ROTATING_LIGHT}`
			: `${WARNING}注意${WARNING}`;
	const author: EmbedAuthorData = {
		name: user.tag,
		iconURL: user.avatarURL() ?? user.defaultAvatarURL,
	};
	const color = status === "成功" ? `GREEN` : status === "失敗" ? `RED` : status === "警告" ? `RED` : `YELLOW`;
	const fields = [
		{ name: "Status", value: status, inline: true },
		{ name: "Action User", value: `<@${user.id}>`, inline: true },
		{ name: "Function", value: actionName, inline: true },
	];
	const datetime = getDatetime("YYYY年MM月DD日（ddd）HH時mm分ss秒");
	const logEmbed = createEmbed({ title, description, author, color, fields, footer: { text: datetime } });
	return logEmbed;
};

export default createEmbed;
