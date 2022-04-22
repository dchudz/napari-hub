import { NextApiRequest, NextApiResponse } from 'next';

import index from '@/fixtures/index.json';
import plugin from '@/fixtures/plugin.json';

export default function getPluginData(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  const { name } = req.query;

  if (name === 'index') {
    res.status(200).json(index);
    return;
  }

  const indexPlugin = index.find(
    (currentPlugin) => currentPlugin.name === name,
  );

  if (indexPlugin) {
    res.status(200).json({
      ...plugin,
      ...indexPlugin,
    });

    return;
  }

  res.status(404).json({ status: `${JSON.stringify(name)} not found` });
}
