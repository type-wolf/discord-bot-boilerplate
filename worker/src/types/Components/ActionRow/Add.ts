import type { MessageButton, MessageSelectMenu, TextInputComponent } from 'discord.js';

export type MessageComponentsType = (MessageButton | MessageSelectMenu) | (MessageButton[] | MessageSelectMenu[]);

export type ModalComponentsType = TextInputComponent | TextInputComponent[];
