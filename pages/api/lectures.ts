// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const mockCategory = {
  id: 0,
  name: '프로그래밍',
};

const tags = [
  { id: 0, title: '평생소장' },
  { id: 1, title: 'AWS' },
  { id: 2, title: 'DevOps' },
];

const lecturesData = {
  lectureList: [
    {
      id: 0,
      category: mockCategory,
      title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
      tags: tags,
      description:
        '개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
      thumb: 'https://picsum.photos/200/300',
      isHot: true,
      isNew: true,
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(lecturesData);
}
