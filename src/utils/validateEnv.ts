const validateEnv = () => {
	if (!process.env.BOT_TOKEN) {
		console.warn("[x] worker > DiscordBotの起動に失敗しました。 \n => `process.env.BOT_TOKEN`が設定されていません。");
		return false;
	}
	if (!process.env.CLIENT_ID) {
		console.warn("[x] worker > DiscordBotのClientの特定に失敗しました。 \n => `process.env.CLIENT_ID`が設定されていません。");
		return false;
	}
	if (!process.env.GUILD_ID) {
		console.warn(
			"[x] worker > DiscordBotが参加しているGuildを特定できませんでした。 \n => `process.env.GUILD_ID`が設定されていません。"
		);
		return false;
	}
	if (!process.env.API_ENDPOINT_DEV || !process.env.API_ENDPOINT_PRO) {
		console.warn(
			"[x] worker > SEVENDAOのAPIのEndPointにアクセスできませんでした。 \n => `process.env.API_ENDPOINT_DEV` 又は `process.env.API_ENDPOINT_PRO`が設定されていません。"
		);
		return false;
	}
	if (!process.env.SEVENDAO_API_KEY) {
		console.warn(
			"[x] worker > SEVENDAOのAPIにアクセスできませんでした。 \n => `process.env.SEVENDAO_API_KEY`が設定されていません。"
		);
		return false;
	}
	if (!process.env.MONGODB_URI) {
		console.warn("[x] web > MongoDBに接続できませんでした。 \n => `process.env.MONGODB_URI`が設定されていません。");
		return false;
	}
	if (!process.env.ROOT_URL_DEV || !process.env.ROOT_URL_PRO) {
		console.warn(
			"[x] web > Fetchに失敗しました。 \n => `process.env.ROOT_URL_DEV` 又は `process.env.ROOT_URL_PRO` が設定されていません。"
		);
		return false;
	}
	return true;
};

export default validateEnv;
