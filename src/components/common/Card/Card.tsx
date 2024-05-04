import { Character } from '@/interfaces'
import Image from 'next/image'

interface CardProps {
    character: Character
}

export default function Card({ character }: CardProps) {
  return (
    <div className="p-4 shadow-md rounded-lg flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">{character?.name}</h1>
      <div className="flex items-center justify-between">
        <Image
          src={character?.image ?? ""}
          alt={character?.name ?? ""}
          width={200}
          height={200}
        />
      </div>
      <p className="mt-2 text-gray-400">Tail: {character?.tail}</p>
      <p className="mt-2 text-gray-400">
        amiiboSeries: {character?.amiiboSeries}
      </p>
      <p className="mt-2 text-gray-400">gameSeries: {character?.gameSeries}</p>
      <p className="mt-2 text-gray-400">head: {character?.head}</p>
      <table className="mt-2 text-gray-400">
        <thead className="text-gray-400">
          <tr className="text-gray-400">
            <th>Release</th>
            <th>au</th>
            <th>eu</th>
            <th>jp</th>
            <th>na</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Release</td>
            <td>{character?.release.au}</td>
            <td>{character?.release.eu}</td>
            <td>{character?.release.jp}</td>
            <td>{character?.release.na}</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-2 text-gray-400"> type: {character?.type}</p>
    </div>
  )
}
