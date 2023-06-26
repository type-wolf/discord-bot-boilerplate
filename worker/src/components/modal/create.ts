import { Modal, DiscordAPIError } from 'discord.js';
import type { CreateModalType } from '../../types/Components/Modal/Create';

export const createModal = (datas: CreateModalType) => {
	const { id, title, actionRow } = datas;
	try {
		const modal = new Modal();
		modal.setCustomId(id);
		modal.setTitle(title);
		modal.addComponents(...actionRow);
		return modal;
	} catch (e: unknown) {
		if (e instanceof DiscordAPIError) {
			return undefined;
		}
		if (e instanceof Error) {
			return undefined;
		}
	}
};
