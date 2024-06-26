const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../config.json');
const stock = require('./stock');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Display the command list.'),

    async execute(interaction) {
        const { commands } = interaction.client;

        const commandListEmbed = new MessageEmbed()
            .setColor(config.color.default)
            .setTitle('Help Panel')
            .setDescription(`👋 Welcome to **${interaction.guild.name}**! 🌟 We are here to provide you with the best services. 🚀`)
            .setImage(config.banner)
            .setThumbnail(interaction.client.user.displayAvatarURL({ dynamic: true, size: 64 })) // Set the bot's avatar as the thumbnail
            .addFields({
                name: `Commands`,
                value: "`/help` **Displays the help command**\n`/gen` **Generate free reward**\n`/stock`  **View the current stock**\n`/premium` **Generate premium reward**"
            })
            .setFooter(interaction.user.tag, interaction.user.displayAvatarURL({ dynamic: true, size: 64 }))
            .setTimestamp()
            .addField('Useful Links', `[**Website**](${config.website}) [**Discord**](https://discord.gg/nbaim)`);

        await interaction.reply({ embeds: [commandListEmbed] });
    },
};
