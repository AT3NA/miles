/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "hi",
			description: "Generally used to check if bot is Up",
			category: "general",
			usage: `${client.config.prefix}hi`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const miles =
			"https://www.icegif.com/wp-content/uploads/2021/12/icegif-1225.gif";
		return void this.client.sendMessage(
			M.from,
			{ url: miles },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `Yo! WhatsUp! 🔥I'm Miles Morales🔥 Use something from *${this.client.config.prefix}help* list if you want anything. \n`,
			}
		);
	};
}
