import type { SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

type RunType = {
	interaction: CommandInteraction;
};

export interface Command {
	data: Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand"> | SlashCommandSubcommandsOnlyBuilder;
	run: (datas: RunType) => Promise<void>;
}
