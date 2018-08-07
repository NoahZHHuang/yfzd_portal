import Content from './content';

const Config = {
    posters : [
        {
            posterPath: './assets/poster_1.jpg',
            content: Content.content_2
       },
       {
            posterPath: './assets/poster_2.jpg',
            content: Content.content_1
        },
        {
            posterPath: './assets/poster_3.jpg',
            content: Content.content_3
        },
       {
            posterPath: './assets/poster_4.jpg',
            content: Content.content_4
        }
    ],
    currentIndex: 0
};

export default Config;