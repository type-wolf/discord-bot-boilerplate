import { Client, ClientUser, WebSocketManager } from "discord.js";
import { IntentOptions } from "../config/IntentOptions";
import { onReady } from "../events/onReady";

jest.mock("discord.js");

describe("index", () => {
	it("should log 'DiscordBot起動'", async () => {
		const mockedClient = new Client({ intents: IntentOptions });
		mockedClient.login = jest.fn().mockResolvedValue(undefined);
		mockedClient.user = {
			id: "mockedId",
			tag: "mockedUser#0001",
			bot: true,
			avatar: null,
			createdAt: new Date(),
			createdTimestamp: Date.now(),
		} as ClientUser;
		mockedClient.ws = {
			status: 0,
			emit: jest.fn(),
			on: jest.fn(),
			once: jest.fn(),
			off: jest.fn(),
			removeAllListeners: jest.fn(),
		} as unknown as WebSocketManager;
		const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
		const onReadySpy = jest.spyOn(onReady, "onReady");
		await require("./index");
		expect(consoleLogSpy).toHaveBeenCalledWith("✅ DiscordBot起動");
		expect(onReadySpy).toHaveBeenCalledWith(mockedClient);
	});
});
