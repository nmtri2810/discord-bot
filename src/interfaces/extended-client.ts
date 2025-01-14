import { Client, Collection, CommandInteraction } from 'discord.js';

export interface ExtendedClient extends Client {
	commands: Collection<string, { data: any; execute: (interaction: CommandInteraction) => Promise<void> }>;
}
