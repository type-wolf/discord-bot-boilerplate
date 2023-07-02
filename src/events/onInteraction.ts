import { DiscordAPIError } from "discord.js";
import { OnInterctionType } from "../types/Events/OnInteraction";
import { CommandList } from "../commands/_CommandList";

const onInteraction = async (datas: OnInterctionType) => {
	const { interaction } = datas;
	try {
		if (interaction.isCommand()) {
			for (const Command of CommandList) {
				if (interaction.commandName === Command.data.name) {
					await Command.run({ interaction });
					break;
				}
			}
		}
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

export default onInteraction;
