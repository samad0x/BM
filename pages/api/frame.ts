import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return res.status(200).json({
      frames: [
        {
          image: https://imgur.com/y5zxreY, // لینک تصویر دوم رو اینجا بذارید
          buttons: [
            {
              label: "Back"
            }
          ],
          postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame`
        }
      ]
    });
  }

  return res.status(200).json({
    frames: [
      {
        image: https://imgur.com/vGE9epi, // لینک تصویر اول رو اینجا بذارید
        buttons: [
          {
            label: "BM"
          }
        ],
        postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame`
      }
    ]
  });
}
