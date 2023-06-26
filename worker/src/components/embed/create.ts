import { MessageEmbed, DiscordAPIError } from 'discord.js';
import type { CreateEmbed } from '../../types/Components/Embed/Create';

export const createEmbed = (datas: CreateEmbed) => {
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
			embed.setColor('RANDOM');
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
