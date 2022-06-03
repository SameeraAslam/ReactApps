import React from "react";
import styles from "../../styles/Home.module.css";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

const Content = () => {
  Chart.register(CategoryScale);
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Sales/ month",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 0,
        pointHoverRadius: 0,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 0,
        data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
      },
    ],
  };

  //doughnut chart data set

  const data1 = {
    labels: ["Organic", "Social Media", "Websites"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className={styles.conContainer}>
      <div className={styles.conWrapper}>
        <div className={styles.tabs}>
          <div className={styles.cats}>
            <h2>Companies</h2>
          </div>
        </div>

        <div className={styles.tabs}>
          <div className={styles.cats}>
            <h2>Customers</h2>
          </div>
        </div>

        <div className={styles.tabs}>
          <div className={styles.cats}>
            <h2>Users</h2>
          </div>
        </div>

        <div className={styles.tabs}>
          <div className={styles.cats}>
            <h2>Projects</h2>
          </div>
        </div>
      </div>

      <div className={styles.charts}>
        <div className={styles.bar}>
          <h2>Sales</h2>
          <Line data={data} width={400} height={400} />
        </div>
        <div className={styles.circle}>
          <h2>Customers Arrived </h2>
          <Doughnut data={data1} height={400} width={400} />
        </div>
      </div>
    </div>
  );
};

export default Content;
