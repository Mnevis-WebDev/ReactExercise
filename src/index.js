import ReactDOM from "react-dom";
import React from "react";
import "./styles.css";

const name = "Mnevis";
//const year = new Date().getFullYear();
const rootElement = document.getElementById("root");

ReactDOM.render(
  <div>
    <h1 className="title" contentEditable="true" spellCheck="false">
      Hello !
    </h1>
    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ae0b7c44-11d7-4fd8-941c-7e709b9b649b/del2lg2-f0a840f5-85ac-46ae-8e31-0a8148486dd2.jpg/v1/fill/w_700,h_311,q_70,strp/the_city_of_water_by_lpsdc_del2lg2-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTc4IiwicGF0aCI6IlwvZlwvYWUwYjdjNDQtMTFkNy00ZmQ4LTk0MWMtN2U3MDliOWI2NDliXC9kZWwybGcyLWYwYTg0MGY1LTg1YWMtNDZhZS04ZTMxLTBhODE0ODQ4NmRkMi5qcGciLCJ3aWR0aCI6Ijw9MjIwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.q4JHW8Q_oylRTv8df1nASRh6fnUp5IvkHrs5VWe333I" />
    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1dd97dfc-0dbf-4f88-b03d-c7977dc97a2d/dem5nxm-8b25b91b-7947-4178-941c-5a8dd72f573f.png/v1/fill/w_476,h_250,q_70,strp/experiment_by_clamortenebre_dem5nxm-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjcyIiwicGF0aCI6IlwvZlwvMWRkOTdkZmMtMGRiZi00Zjg4LWIwM2QtYzc5NzdkYzk3YTJkXC9kZW01bnhtLThiMjViOTFiLTc5NDctNDE3OC05NDFjLTVhOGRkNzJmNTczZi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.w8XC8ufovlPc7TVB_JQ-T8K5ZBn980lR82bePuXfZ8A" />
    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ef787b0f-f82b-45a7-96ff-3fec3ac4d89c/defzd47-dc45e130-d17c-4bef-986a-6375a8de7e68.jpg/v1/fill/w_500,h_250,q_70,strp/a_little_walk_by_ashnoalice_defzd47-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAwIiwicGF0aCI6IlwvZlwvZWY3ODdiMGYtZjgyYi00NWE3LTk2ZmYtM2ZlYzNhYzRkODljXC9kZWZ6ZDQ3LWRjNDVlMTMwLWQxN2MtNGJlZi05ODZhLTYzNzVhOGRlN2U2OC5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ViIvzQjYbJq3jySfHIyi18KEWiq8RlCrfgOPxbqbImw" />

    <p>Created by {name}</p>
    <p>Copyright {new Date().getFullYear()}</p>
  </div>,
  rootElement
);
