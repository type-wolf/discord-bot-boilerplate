const validateEnv = () => {
	if (!process.env.BOT_TOKEN) {
		console.warn("[x] worker > DiscordBot failed to start. \n => `process.env.BOT_TOKEN` is not set.");
		return false;
	}
	if (!process.env.CLIENT_ID) {
		console.warn("[x] worker > Failed to identify DiscordBot's Client. \n => `process.env.CLIENT_ID` is not set.");
		return false;
	}
	if (!process.env.GUILD_ID) {
		console.warn(
			"[x] worker > Could not identify the Guild in which DiscordBot is participating. \n => `process.env.GUILD_ID` is not set."
		);
		return false;
	}
	if (!process.env.API_ENDPOINT_DEV || !process.env.API_ENDPOINT_PRO) {
		console.warn(
			"[x] worker > Could not access API EndPoint. \n => `process.env.API_ENDPOINT_DEV` or `process.env.API_ENDPOINT_PRO` is not set."
		);
		return false;
	}
	if (!process.env.MONGODB_URI) {
		console.warn("[x] web > Could not connect to MongoDB. \n => `process.env.MONGODB_URI` is not set.");
		return false;
	}
	if (!process.env.ROOT_URL_DEV || !process.env.ROOT_URL_PRO) {
		console.warn("[x] web > Fetch failed. \n => `process.env.ROOT_URL_DEV` or `process.env.ROOT_URL_PRO` is not set.");
		return false;
	}
	return true;
};

export default validateEnv;
