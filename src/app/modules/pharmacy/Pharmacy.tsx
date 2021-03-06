import { Route, Switch } from "react-router-dom"
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { DashboardWrapper } from "../../pages/dashboard/DashboardWrapper";
import ViewInventory from './inventory/ViewInventory'

const pharmacyBreadcrumbs: Array<PageLink> = [
    {
        title: "Inventory Management",
        path: "/pharmacy",
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

const Pharmacy = () => {
    return (
        <Switch>
            <Route exact path="/pharmacy">
                <PageTitle breadcrumbs={pharmacyBreadcrumbs}>Dashboard</PageTitle>
                <DashboardWrapper />
            </Route>
            <Route path="/pharmacy/view">
                <PageTitle breadcrumbs={pharmacyBreadcrumbs}>Dashboard</PageTitle>
                <ViewInventory />
            </Route>
        </Switch>
    )
}

export default Pharmacy
