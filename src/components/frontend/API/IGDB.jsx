import React, { useEffect, useState } from 'react';
import Games from '../UI/carousels/games';

const IGDB = () => {
    const [games, setGames] = useState([]);
    const [covers, setCovers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `/api/games/g`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                );

                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error('Error fetching games data: ', error);            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `/api/games/c`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                );

                const data = await response.json();
                setCovers(data);
            } catch (error) {
                console.error('Error fetching covers data: ', error);
            }
        };

        fetchData();
    }, []);

    const carouselItems = games.map(game => {
        const coverData = covers.find(cover => cover.game === game.id);
        const cover = coverData && coverData.url.replace('t_thumb', 't_cover_big');

        console.log(coverData);

        return {
            id: game.id,
            imageSrc: cover, 
            label: game.name,
            summary: game.summary,
        };
    });

    return (
        <div>
            <Games items={carouselItems} />
        </div>
    );
};

export default IGDB;
