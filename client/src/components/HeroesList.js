import React from 'react';


const heroes = [
  { id: 1, name: 'Kamala Khan', image: 'https://i.pinimg.com/564x/d6/73/83/d673832359e8867b6e7e9d940ade5af7.jpg' },
  { id: 2, name: 'Doreen Green', image: 'https://w0.peakpx.com/wallpaper/189/58/HD-wallpaper-robin-pretty-glow-superhero-beautiful-sweet-nice-anime-hot-beauty-anime-girl-light-night-female-lovely-sexy-building-cute-comic-girl.jpg '},
  { id: 3, name: 'Gwen Stacy', image: 'https://vietnamtimes.org.vn/stores/news_dataimages/minhchauvnt/122021/27/10/3335_Raphtalia-Fighting-Shield-Hero.jpg?rt=20211227103336' },
  { id: 4, name: 'Janet Van Dyne', image: 'https://thoughtcatalog.com/wp-content/uploads/2012/07/sano-sanosuke-sagara-14020998-1024-768.jpg' },
  { id: 5, name: 'Wanda Maximoff', image: 'https://www.campi-anime.com/wp-content/uploads/2022/02/Keigo-Takami-My-Hero-Academia.jpg' },
  { id: 6, name: 'Carol Danvers', image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2416405b-7d60-426f-9c10-6164dbb33983/dft6a24-23f8348e-120f-41d7-b128-e49c733b0daa.jpg/v1/fit/w_375,h_375,q_70,strp/supergirl_by_johnnycadillacz_dft6a24-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzI0MTY0MDViLTdkNjAtNDI2Zi05YzEwLTYxNjRkYmIzMzk4M1wvZGZ0NmEyNC0yM2Y4MzQ4ZS0xMjBmLTQxZDctYjEyOC1lNDljNzMzYjBkYWEuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.653XqFnWlOHm7tHavniS7i8CKCC2WTMsGHOud6OB5wg' },
  { id: 7, name: 'Jean Grey', image: 'https://c4.wallpaperflare.com/wallpaper/54/109/266/ben-10-gwen-tennyson-cartoon-network-2d-artwork-hd-wallpaper-preview.jpg' },
  { id: 8, name: 'Ororo Munroe', image: 'https://media.criticalhit.net/2015/11/Green-Lantern-1.jpg' },
  { id: 9, name: 'Kitty Pryde', image: 'https://w0.peakpx.com/wallpaper/150/630/HD-wallpaper-girl-sword-anime-flower-hero-woman-thumbnail.jpg' },
  { id: 10, name: 'Elektra Natchios', image: 'https://media.gettyimages.com/id/1298958853/photo/female-jet-pack-superhero-with-staff-lands-on-city-rooftop.jpg?s=612x612&w=0&k=20&c=CutRbICnhc3XgpqX6FGS0V8ew0e4ZOjvrnQ81H4e79k=' },
];

const HeroesList = ({ onHeroClick }) => {
  return (
    <div className="container">
      <div className="row">
        {heroes.map((hero) => (
          <div className="col-md-4" key={hero.id}>
            <div className="card mb-4">
              <img src={hero.image} className="card-img-top" alt={hero.name} />
              <div className="card-body">
                <h5 className="card-title">{hero.name}</h5>
                <button className="btn btn-primary" onClick={() => onHeroClick(hero)}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroesList;
