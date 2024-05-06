import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Numero de Serviços", "numero de Serviços"],
  ["Serviço1", 15],
  ["Serviço2", 10],
  ["Serviço3", 6],
];

export const options = {
  title: "Numero de Serviços",
  is3d: true,
  backgroundColor: "#b8faa7",
};

export default function Grafico() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"350px"}
      height={"300px"}
    />
  );
}
