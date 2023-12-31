import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import validateEnv from "./utils/validateEnv";
import onInteraction from "./events/onInteraction";
import onReady from "./events/onReady/";
import onGetModals from "./events/onGetModals/";
import onGetButtons from "./events/onGetButtons/";
import onGetSelectMenus from "./events/onGetSelectMenus/";
import onMessageReactionAdd from "./events/onMessageReactionAdd/";
import onMessageReactionRemove from "./events/onMessageReactionRemove/";
import onMessageCreate from "./events/onMessageCreate/";
import onMessageDelete from "./events/onMessageDelete/";
import onGuildMemberAdd from "./events/onGuildMemberAdd/";
import onGuildMemberUpdate from "./events/onGuildMemberUpdate/";
import onGuildScheduledEventCreate from "./events/onGuildScheduledEventCreate";
import onGuildScheduledEventUpdate from "./events/onGuildScheduledEventUpdate";
import onGuildScheduledEventDelete from "./events/onGuildScheduledEventDelete";

(async () => {
	if (!validateEnv()) return;
	const BOT = new Client({ intents: IntentOptions });
	BOT.on("ready", async () => await onReady(BOT));
	BOT.on("interactionCreate", async (interaction) => await onInteraction({ interaction }));
	BOT.on("interactionCreate", async (interaction) => await onGetModals(interaction));
	BOT.on("interactionCreate", async (interaction) => await onGetButtons(interaction));
	BOT.on("interactionCreate", async (interaction) => await onGetSelectMenus(interaction));
	BOT.on("guildMemberAdd", async (GuildMember) => await onGuildMemberAdd(GuildMember));
	BOT.on("messageCreate", async (message) => await onMessageCreate(BOT, message));
	BOT.on("messageDelete", async (message) => await onMessageDelete(BOT, message));
	BOT.on("messageReactionAdd", async (reaction, user) => {
		await onMessageReactionAdd({ BOT, reaction, user });
	});
	BOT.on("messageReactionRemove", async (reaction, user) => {
		await onMessageReactionRemove({ BOT, reaction, user });
	});
	BOT.on("guildMemberUpdate", async (oldMember, newMember) => {
		await onGuildMemberUpdate(oldMember, newMember);
	});
	BOT.on("guildScheduledEventCreate", async (guildScheduledEvent) => await onGuildScheduledEventCreate(guildScheduledEvent));
	BOT.on("guildScheduledEventUpdate", async (guildScheduledEvent) => await onGuildScheduledEventUpdate(guildScheduledEvent));
	BOT.on("guildScheduledEventDelete", async (guildScheduledEvent) => await onGuildScheduledEventDelete(guildScheduledEvent));
	console.log("✅ DiscordBot起動");
	await BOT.login(process.env.BOT_TOKEN);
})();
