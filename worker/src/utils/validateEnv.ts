const validateEnv = () => {
	if (!process.env.BOT_TOKEN) {
		console.warn('[x] Bot failed to start. \n => `process.env.BOT_TOKEN` is not defined');
		return false;
	}
	if (!process.env.CLIENT_ID) {
		console.warn('[x] Bot identification failed. \n => `process.env.CLIENT_ID` is not defined.');
		return false;
	}
	if (!process.env.GUILD_ID) {
		console.warn('[x] Bot identification failed. \n => `process.env.GUILD_ID` is not defined.');
		return false;
	}
	return true;
};

export default validateEnv;
