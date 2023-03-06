/* Function declaration */
export default function Movie(props) {
//   console.log("Render Movie");

  //   console.log(props);
  return (
    <article>
      <h3>{props.title}</h3>
      <p>year: {props.year}</p>
      <ul>
        <li>{props.cast[0]}</li>
        <li>{props.cast[1]}</li>
      </ul>
    </article>
  );
}

/* Expression function */
// const Movie = (props) => {
//   console.log(props);
//   return (
//     <article>
//       <h3>{props.title}</h3>
//       <p>year: {props.year}</p>
//       <ul>
//         <li>{props.cast[0]}</li>
//         <li>{props.cast[1]}</li>
//       </ul>
//     </article>
//   );
// };
// export default Movie;
