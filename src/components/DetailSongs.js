import React, { useContext } from 'react';

import { Songs } from '../Context';

export default function DetaiLSongs() {
    const { song } = useContext(Songs);

    return (
        <div className="col-span-1 p-3">
            <h2 className="text-cyan-500 font-bold">Now playing</h2>
            <h2 className="text-zinc-400  md:text-2xl text-base mb-5">{song.name}</h2>
            <div className="md:w-[230px] lg:w-[400px] w-[100px] md:m-auto md:mt-10">
                <img className="w-full object-cover rounded-lg	" alt="avatar" src={song.links.images[0].url} />
            </div>
            <div className="md:flex md:justify-evenly items-center mt-5">
                <img className="md:rounded-full md:w-[100px] w-0" alt="avatar" src={song.links.images[1].url} />
                <span className="md:text-2xl text-white">{song.author}</span>
            </div>
        </div>
    );
}
