import Content from './content';
import POSTER_5 from '../../assets/poster_5.jpg';
import POSTER_6 from '../../assets/poster_6.jpg';
import POSTER_7 from '../../assets/poster_7.jpg';
import POSTER_8 from '../../assets/poster_8.jpg';
import POSTER_9 from '../../assets/poster_9.jpg';
import POSTER_11 from '../../assets/poster_11.jpg';
import POSTER_12 from '../../assets/poster_12.jpg';
import POSTER_13 from '../../assets/poster_13.jpg';
import POSTER_14 from '../../assets/poster_14.jpg';
import POSTER_15 from '../../assets/poster_15.jpg';

const Config = {
    posters : [
        {
            posterPath: POSTER_5,
            content: Content.content_5
       },
       {
            posterPath: POSTER_6,
            content: Content.content_5
        },
        {
            posterPath: POSTER_7,
            content: Content.content_5
        },
       {
            posterPath: POSTER_8,
            content: Content.content_6
        },
        {
            posterPath: POSTER_9,
            content: Content.content_7
        },
        {
            posterPath: POSTER_11,
            content: Content.content_8
        },
        {
            posterPath: POSTER_12,
            content: Content.content_9
        },
        {
            posterPath: POSTER_13,
            content: Content.content_10
        },
        {
            posterPath: POSTER_14,
            content: Content.content_10
        },
        {
            posterPath: POSTER_15,
            content: Content.content_10
        }
    ],
    currentIndex: 0
};

export default Config;