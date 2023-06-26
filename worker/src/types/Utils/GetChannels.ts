import type { Collection, GuildBasedChannel, VoiceChannel, TextChannel, StageChannel, ThreadChannel } from 'discord.js';

export type ChannelType = TextChannel | VoiceChannel | ThreadChannel | StageChannel | undefined;

export type ChannelsType = Collection<string, GuildBasedChannel>;

export type ChannelsReturnType<T> = Collection<string, T>;

export type GetChannelsReturnType = {
	textChannels?: ChannelsReturnType<TextChannel>;
	voiceChannels?: ChannelsReturnType<VoiceChannel>;
	forumChannels?: ChannelsReturnType<ThreadChannel>;
	stageChannels?: ChannelsReturnType<StageChannel>;
};
