import type { MessageButton, MessageSelectMenu, TextInputComponent } from "discord.js";

export type ButtonComponents = MessageButton | MessageButton[];

export type SelectMenuComponents = MessageSelectMenu | MessageSelectMenu[];

export type TextInputComponents = TextInputComponent | TextInputComponent[];

export type ComponentsType = ButtonComponents | SelectMenuComponents;
