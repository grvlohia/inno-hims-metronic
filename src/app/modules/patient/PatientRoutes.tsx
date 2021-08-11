import { Route, Switch } from "react-router-dom";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import NewPatient from "./components/NewPatient";
import PatientDashboard from "./components/PatientDashboard";

const patientBreadcrumbs: Array<PageLink> = [
  {
    title: "Patient Management",
    path: "/patient",
    isSeparator: false,
    isActive: true,
  },
  {
    title: "",
    path: "",
    isSeparator: true,
    isActive: false,
  },
];

const PatientRoutes = () => {
  return (
    <Switch>
      <Route path="/patient/new">
        <PageTitle breadcrumbs={patientBreadcrumbs}>New Patient</PageTitle>
        <NewPatient />
      </Route>
      <Route path="/patient">
        <PageTitle breadcrumbs={patientBreadcrumbs}>Dashboard</PageTitle>
        <PatientDashboard />
      </Route>
    </Switch>
  );
};

export default PatientRoutes;
