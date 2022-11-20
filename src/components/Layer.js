import React, { useContext } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../index.css';

import { Songs } from '../Context';

export default function Layer() {
    const { song, handleSetSong, DataSongs } = useContext(Songs);

    const handleClickNext = () => {
        if (song.id === DataSongs.length - 1) {
            handleSetSong(0);
        } else {
            handleSetSong(song.id + 1);
        }
    };
    const handleClickPonClickPrevious = () => {
        if (song.id === 0) {
            handleSetSong(DataSongs.length - 1);
        } else {
            handleSetSong(song.id - 1);
        }
    };

    return (
        <div>
            <AudioPlayer
                className="playerMusic"
                src={song.url}
                layout="stacked-reverse"
                showSkipControls={true}
                showJumpControls={false}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPonClickPrevious}
            />
        </div>
    );
}
