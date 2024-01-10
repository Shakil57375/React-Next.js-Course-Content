const style1 = {
  backgroundColor: "red",
};
export default function App() {
  const style2 = {
    backgroundColor: "green",
  };

  const color = "green";
//   let style = "";

//   if (color === "green") {
//     style = style1;
//   } else {
//     style = style2;
//   }
  const today = new Date();
  const formateDate = (date) => {
    return Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  };
  return (
    // <ul style={style}>
    <ul style={color === "green" ? style2 : style1}>
      <p>today is {formateDate(today)}</p>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
