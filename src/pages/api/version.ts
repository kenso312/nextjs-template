import { NextApiRequest, NextApiResponse } from 'next';
import packageJSON from '@/../package.json';

const handler = (req: NextApiRequest, res: NextApiResponse): void =>
  res.status(200).json({ version: packageJSON.version });

export default handler;
