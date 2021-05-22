import React from 'react';
import { Layout } from '../components/layout';

export const Parts: React.FC = (): JSX.Element => (
  <Layout pageTitle="Members" >
    <div classNameName="w-full text-center mx-auto">
      <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-900 text-gray-200">
        <tr className="text-left border-b border-gray-300">
          <th className="px-4 py-3">Firstname</th>
          <th className="px-4 py-3">Lastname</th>
          <th className="px-4 py-3">Age</th>
          <th className="px-4 py-3">Sex</th>
        </tr>
        <tr className="bg-gray-700 border-b border-gray-700">
          <td className="px-4 py-3">Jill</td>
          <td className="px-4 py-3">Smith</td>
          <td className="px-4 py-3">50</td>
          <td className="px-4 py-3">Male</td>
        </tr>
        <tr className="bg-gray-700 border-b border-gray-700">
          <td className="px-4 py-3">Jill</td>
          <td className="px-4 py-3">Smith</td>
          <td className="px-4 py-3">50</td>
          <td className="px-4 py-3">Male</td>
        </tr>
        <tr className="bg-gray-700 border-b border-gray-700">
          <td className="px-4 py-3">Jill</td>
          <td className="px-4 py-3">Smith</td>
          <td className="px-4 py-3">50</td>
          <td className="px-4 py-3">Male</td>
        </tr>
      </table>
    </div>
  </Layout>
)

export default Parts
