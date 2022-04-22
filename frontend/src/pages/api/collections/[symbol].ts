import { NextApiRequest, NextApiResponse } from 'next';

import collections from '@/fixtures/collections.json';

export default function getPluginData(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  const collection = collections.find(
    ({ symbol }) => symbol === req.query.symbol,
  );

  if (collection) {
    res.json(collection);
  } else {
    res.status(404).send('not found');
  }
}
