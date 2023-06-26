import { DiscordAPIError } from 'discord.js';
import type { Interaction } from 'discord.js';

const onGetButtons = async (interaction: Interaction) => {
	if (!interaction.isButton()) return;
	const { user, guild, customId } = interaction;
	if (!guild) {
		await interaction.reply({ content: ``, ephemeral: true });
		return;
	}
	try {
		return;
	} catch (e: unknown) {
		if (e instanceof DiscordAPIError) {
			switch (e.code) {
				case 0: {
					await interaction.reply({ content: ``, ephemeral: true });
					return;
				}
				case 1: {
					await interaction.reply({ content: ``, ephemeral: true });
					return;
				}
				default: {
					await interaction.reply({ content: ``, ephemeral: true });
					return;
				}
			}
		}
		if (e instanceof Error) {
			switch (e.name) {
				case `sample1`: {
					await interaction.reply({ content: ``, ephemeral: true });
					return;
				}
				case `sample2`: {
					await interaction.reply({ content: ``, ephemeral: true });
					return;
				}
				default: {
					await interaction.reply({ content: ``, ephemeral: true });
					return;
				}
			}
		}
	}
};

export default onGetButtons;
