import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
// import { validateEnv } from "./utils/validations/validateEnv";
// import { onInteraction } from "./events/onInteraction";
import { onReady } from "./events/onReady/index";
// import { onGetModals } from "./events/onGetModals/index";
// import { onGetButtons } from "./events/onGetButtons/index";
// import { onGetSelectMenus } from "./events/onGetSelectMenus/index";
// import { onMessageReactionAdd } from "./events/onMessageReactionAdd/index";
// import { onMessageReactionRemove } from "./events/onMessageReactionRemove/index";
// import { onMessageCreate } from "./events/onMessageCreate/index";
// import { onMessageDelete } from "./events/onMessageDelete/index";
// import { onGuildMemberAdd } from "./events/onGuildMemberAdd";

(async () => {
	// if (!validateEnv()) return;
	const BOT = new Client({ intents: IntentOptions });
	BOT.on("ready", async () => await onReady(BOT));
	// BOT.on("interactionCreate", async (interaction) => await onInteraction({ interaction }));
	// BOT.on("interactionCreate", async (interaction) => await onGetModals(interaction));
	// BOT.on("interactionCreate", async (interaction) => await onGetButtons(interaction));
	// BOT.on("interactionCreate", async (interaction) => await onGetSelectMenus(interaction));
	// BOT.on("guildMemberAdd", async (GuildMember) => await onGuildMemberAdd(GuildMember));
	// BOT.on("messageCreate", async (message) => await onMessageCreate(BOT, message));
	// BOT.on("messageDelete", async (message) => await onMessageDelete(BOT, message));
	// BOT.on("messageReactionAdd", async (reaction, user) => await onMessageReactionAdd(BOT, reaction, user));
	// BOT.on("messageReactionRemove", async (reaction, user) => await onMessageReactionRemove(BOT, reaction, user));
	await BOT.login(process.env.BOT_TOKEN);
})();
