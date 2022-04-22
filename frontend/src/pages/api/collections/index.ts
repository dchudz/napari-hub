import { pick } from 'lodash';
import { NextApiRequest, NextApiResponse } from 'next';

import collections from '@/fixtures/collections.json';

export default function getCollectionsData(
  _: NextApiRequest,
  res: NextApiResponse,
): void {
  res
    .status(200)
    .json(
      collections.map((collection) =>
        pick(collection, [
          'title',
          'cover_image',
          'summary',
          'curator',
          'symbol',
        ]),
      ),
    );
}
