import * as react from 'react';

type Props = {}

export const Header: React.FC<Props> = ({ children }) => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
            <div className="flex items-center flex-no-shrink text-white mr-6">
                <span className="font-bold text-2xl tracking-wide">Funai Gaming Web</span>
            </div>
        </nav>
    )
}
