import React from 'react';
import { Layout } from '../components/layout';
import { InlineLink } from '../components/parts/inlineLink'

type Member = {
  nickname: string,
  twitterURL: string,
}

const members: Member[] = [
  {
    nickname: 'funai',
    twitterURL: 'https://twitter.com/paveg_'
  }
]

export const Parts: React.FC = (): JSX.Element => (
  <Layout pageTitle="Members" >
    <div className="w-full text-center mx-auto">
      <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-900 text-gray-200">
        <thead>
          <tr className="text-left border-b border-gray-300">
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">SNS</th>
          </tr>
        </thead>
        <tbody>
          {
            members.map((member: Member) => {
              return <tr key={member.nickname} className="bg-gray-700 border-b border-gray-700">
                <td className="px-4 py-3">{member.nickname}</td>
                <td className="px-4 py-3">
                  <InlineLink href={member.twitterURL} target='_blank'>
                    Twitter
                  </InlineLink>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  </Layout>
)

export default Parts
