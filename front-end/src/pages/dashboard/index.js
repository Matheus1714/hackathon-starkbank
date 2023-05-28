/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "pages/dashboard/data/reportsBarChartData";
import reportsLineChartData from "pages/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "pages/dashboard/components/Projects";
import OrdersOverview from "pages/dashboard/components/OrdersOverview";

import api from "services/api";
// import getJsonData from "services/json";
import React, { useEffect, useState } from "react";
import { headers } from "../../next.config";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  const [data, setData] = useState();
  useEffect(() => {
    api
      .get("/APIStarkcoin")
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  const getDate = () => {
    let date = new Date();
    return String(date);
  };

  return (
    // <DashboardLayout>
    //   <p>{data}</p>
    // </DashboardLayout>
    <DashboardLayout>
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="sell"
                title="Crédito"
                count="R$ 1000,00"
                percentage={{
                  color: "success",
                  amount: "+2.2%",
                  label: "rendimento",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="monetization_on"
                title="StarkCoins"
                count="10,00"
                percentage={{
                  color: "success",
                  amount: "+3.7%",
                  label: "rendimento",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="account_balance"
                title="Débito"
                count="R$ 2031,00"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "rendimento",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="send"
                title="Transações"
                count="213"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Rendimento StarkCoin"
                  description="Rendimento diário"
                  date={getDate()}
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        {/* <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox> */}
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
