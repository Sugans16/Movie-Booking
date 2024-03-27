import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMovie } from "../redux/actions";
import { LogoutOutlined } from "@ant-design/icons";

const MoviesPage = () => { 
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: 1,
      title: "Avengers End-Game",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    },
    {
      id: 2,
      title: "Fantastic Four",
      image:
        "https://i.pinimg.com/originals/76/8c/52/768c5252afd9e98ca10e55f901745abb.jpg",
    },
    {
      id: 3,
      title: "Captain America",
      image: "https://m.media-amazon.com/images/I/51Xp+8qDCbL.jpg",
    },
    {
      id: 4,
      title: "Thor",
      image:
        "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
    },
    {
      id: 5,
      title: "Black Panther",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
    },
    {
      id: 6,
      title: "Wonder Woman",
      image:
        "https://filmartgallery.com/cdn/shop/products/Wonder-Woman-Vintage-Movie-Poster-Original-1-Sheet-27x41_48d4ac53-bfa2-4f01-a94e-973b37095636.jpg?v=1663223491",
    },
    {
      id: 7,
      title: "Spider-Man: Far From Home",
      image: "https://wallpapercave.com/wp/wp8562078.jpg",
    },
    {
      id: 8,
      title: "Guardians of the Galaxy",
      image:
        "https://m.media-amazon.com/images/I/71PUHIGp+-L._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 9,
      title: "Doctor Strange",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kingqkw0-0/poster/s/0/c/medium-avengers-doctor-strange-wall-poster-for-room-office-size-original-imafye9zgaymyqcf.jpeg?q=20&crop=false",
    },
    {
      id: 10,
      title: "Deadpool",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/04eafb25626631.5634844b7293f.jpg",
    },
    {
      id: 11,
      title: "Iron Man",
      image:
        "https://i.etsystatic.com/23402008/r/il/6afcc5/3629125899/il_fullxfull.3629125899_gn3f.jpg",
    },
    {
      id: 12,
      title: "Ant-Man",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_.jpg",
    },
    {
      id: 13,
      title: "The Dark Knight",
      image:
        "https://m.media-amazon.com/images/I/81CLFQwU-WL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 14,
      title: "Aquaman",
      image: "https://i.ebayimg.com/images/g/vIsAAOSw4a1bXBWG/s-l1200.webp",
    },
    {
      id: 15,
      title: "X-Men: Days of Future Past",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/x-men_dofp_584x800_ka_01_1f52bc15.jpeg?region=0%2C0%2C584%2C800",
    },
    {
      id: 16,
      title: "Shazam!",
      image:
        "https://assets-prd.ignimgs.com/2023/01/24/shzam2-vert-main-2764x4096-dom-1674589983500.jpg",
    },
    {
      id: 17,
      title: "Avengers: Infinity War",
      image:
        "https://i.etsystatic.com/37166133/r/il/60f034/4087791906/il_570xN.4087791906_jcbj.jpg",
    },
    {
      id: 18,
      title: "Hulk",
      image:
        "https://image.tmdb.org/t/p/original/2nBpExDoInX3VreBsIm9qOTqXs8.jpg",
    },
    {
      id: 19,
      title: "Blade",
      image: "https://i.ebayimg.com/images/g/G5gAAOSwPGhh7YAF/s-l1600.jpg",
    },
    {
      id: 20,
      title: "X-Men: First Class",
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5a8a6131-48da-4feb-9bfe-3a555b3312c2/deewnsm-416a3bd1-53a0-4870-a405-6ad028cfdc49.jpg/v1/fill/w_900,h_1334,q_75,strp/x_men__first_class_by_darksideofdesign_deewnsm-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMzNCIsInBhdGgiOiJcL2ZcLzVhOGE2MTMxLTQ4ZGEtNGZlYi05YmZlLTNhNTU1YjMzMTJjMlwvZGVld25zbS00MTZhM2JkMS01M2EwLTQ4NzAtYTQwNS02YWQwMjhjZmRjNDkuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.y8rRbnc3gV2_CsuW_YJ5yJI6IUjJDCVhRy_huRg_PjQ",
    },
    {
      id: 21,
      title: "Iron Man 3",
      image:
        "https://images-cdn.ubuy.co.in/65809c8a3976f525d26ef0ea-movie-poster-iron-man-3-2-sided-rare.jpg",
    },
    {
      id: 22,
      title: "The Wolverine",
      image:
        "https://upload.wikimedia.org/wikipedia/en/7/74/The_Wolverine_posterUS.jpg",
    },
    {
      id: 23,
      title: "Captain Marvel",
      image: "https://i.ebayimg.com/images/g/omkAAOSwbERctjlN/s-l1200.jpg",
    },
    {
      id: 24,
      title: "Man of Steel",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/hd/fb1c778640919.560c0e2ce5747.png",
    },
  ];

  const handleMovieClick = (movie) => {
    dispatch(selectMovie(movie));
  }; 

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "#333", color: "#fff" }}>
        <h2 style={{ textAlign: "left", paddingLeft: "50px" }}>
          Movie Booking
        </h2>
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "5px",
            width: "20%",
            position: "absolute",
            right: "100px",
            top: "20px",
          }}
        />
        <Link
          to="/"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            right: "20px",
            top: "20px",
            color: "#fff",
            fontSize: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LogoutOutlined />
          <span style={{ textDecoration: "none", fontSize: "15px" }}>
            Logout
          </span>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            fontSize: "20px",
            justifyContent: "center",
            width: "100%",
            height: "50px",
            backgroundColor: "#F73A4C",
            color: "#fff",
          }}
        >
          Choose a Movie
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          cursor: "pointer",
          padding: "40px",
          backgroundColor: "#807a79",
          minHeight: "70vh",
        }}
      >
        {filteredMovies.map((movie) => (
          <Link
            key={movie.id}
            to={`/theater`}
            onClick={() => handleMovieClick(movie)}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{ textAlign: "center", cursor: "pointer", margin: "10px" }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow =
                  "rgb(38, 57, 77) 0px 20px 30px -10px";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            >
              <img
                src={movie.image}
                alt={movie.title}
                style={{ borderRadius: "20px", height: "300px" }}
              />
              <div
                style={{
                  fontSize: "1.5 rem",
                  // fontWeight: "bold",
                  marginTop: "0.5rem",
                  color: "#FFFFFF",
                  fontFamily: "serif",
                }}
              >
                {movie.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
