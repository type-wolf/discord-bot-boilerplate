import { TextInputComponent, DiscordAPIError } from 'discord.js';
import type { TextInputComponentOptions } from 'discord.js';

const createTextInput = (datas: TextInputComponentOptions) => {
	const { customId, label, maxLength, minLength, placeholder, required, style, value } = datas;
	try {
		const textInput = new TextInputComponent();
		if (customId) {
			textInput.setCustomId(customId);
		}
		if (label) {
			textInput.setLabel(label);
		}
		if (maxLength) {
			textInput.setMaxLength(maxLength);
		}
		if (minLength) {
			textInput.setMinLength(minLength);
		}
		if (placeholder) {
			textInput.setPlaceholder(placeholder);
		}
		if (required) {
			textInput.setRequired(required);
		}
		if (style) {
			textInput.setStyle(style);
		}
		if (value) {
			textInput.setValue(value);
		}
		return textInput;
	} catch (e: unknown) {
		if (e instanceof DiscordAPIError) {
			return undefined;
		}
		if (e instanceof Error) {
			return undefined;
		}
	}
};

export const createTextInputs = (datas: TextInputComponentOptions[]) => {
	try {
		const textInputs = datas.map((data) => createTextInput(data));
		const newTextInputs = textInputs.filter((textInput) => textInput !== undefined) as TextInputComponent[];
		return newTextInputs;
	} catch (e: unknown) {
		if (e instanceof DiscordAPIError) {
			return undefined;
		}
		if (e instanceof Error) {
			return undefined;
		}
	}
};

export default createTextInput;
