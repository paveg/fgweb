import React from 'react'
import { Layout } from '../components/layout'
import TwitterIcon from '@material-ui/icons/Twitter'
import { IconButton } from '../components/parts/buttons/iconButton'

type Member = {
  nickname: string
  twitterURL: string
}

const members: Member[] = [
  {
    nickname: 'funai',
    twitterURL: 'https://twitter.com/paveg_',
  },
]

export const Parts: React.FC = (): JSX.Element => (
  <Layout pageTitle="Members">
    <div className="w-full text-center mx-auto">
      <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-900 text-gray-200">
        <thead>
          <tr className="text-center border-b border-gray-300">
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">SNS</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member: Member) => {
            return (
              <tr
                key={member.nickname}
                className="bg-white text-gray-900 border-b border-gray-700"
              >
                <td className="px-4 py-3">{member.nickname}</td>
                <td className="px-4 py-3">
                  <IconButton
                    small
                    label="Go to Twitter profile page."
                    apperance="tertiary"
                    IconComponent={TwitterIcon}
                    href="https://twitter.com/paveg_"
                    target="_blank"
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  </Layout>
)

export default Parts
