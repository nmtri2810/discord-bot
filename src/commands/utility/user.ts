import { CommandInteraction, GuildMember, SlashCommandBuilder } from 'discord.js';

export default {
	data: new SlashCommandBuilder().setName('user').setDescription('Provides information about the user.'),
	execute: async (interaction: CommandInteraction) => {
		await interaction.reply(
			`This command was run by ${interaction.user.username}, who joined on ${(interaction.member as GuildMember)?.joinedAt}.`,
		);
	},
};
