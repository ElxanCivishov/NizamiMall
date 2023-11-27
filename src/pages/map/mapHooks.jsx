export const convertToText = ({ dynamicNames, item }) => {
  const field = dynamicNames.find((i) => i?.uid === item?.uid);
  console.log(field, item);
  const { x1, x2, y1, y2 } = field;
  if (field?.company_name?.trim() != null) {
    const words = field?.company_name
      ?.trim()
      .split(" ")
      .map((word, index) => {
        if (word.length > 9) {
          const firstPart = word.slice(0, 7);
          const secondPart = word.slice(7);

          return (
            <tspan key={index}>
              <tspan x={x1} dy={index > 0 ? y1 : y2}>
                {firstPart + "-"}
              </tspan>
              <tspan x={x1} dy={y1}>
                {secondPart}
              </tspan>
            </tspan>
          );
        } else {
          return (
            <tspan
              key={index}
              x={index > 0 || word.length < 5 ? x1 : x2}
              dy={index > 0 ? y1 : y2}
            >
              {word}
            </tspan>
          );
        }
      });

    return words;
  } else {
    return (
      <tspan x={x2} dy={y2}>
        {"Boş zona"
          .trim()
          .split(" ")
          .map((word, index) => {
            return (
              <tspan
                style={{ fill: "red" }}
                key={index}
                x={x1}
                dy={index > 0 ? y1 : y2}
              >
                {word}
              </tspan>
            );
          })}
      </tspan>
    );
  }
};
