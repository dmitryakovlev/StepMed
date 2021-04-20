import type { NextApiRequest, NextApiResponse } from 'next';

type ResData = {
  status: string;
};

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export default async (req: NextApiRequest, res: NextApiResponse<ResData>) => {
  try {
    const messageText = req.body.messageText
      ? `&text=${encodeURIComponent(req.body.messageText)}`
      : '';

    const sentMessage = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}}${messageText}`,
    );

    if (sentMessage.status >= 400) {
      throw new Error();
    }

    res.status(200).json({ status: 'Message sent.' });
  } catch (error) {
    res.status(400).json({ status: "Message wasn't sent." });
  }
};
