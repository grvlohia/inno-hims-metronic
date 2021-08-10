import { Route, Switch } from "react-router-dom"
import NewPatient from "./components/NewPatient"
import PatientDashboard from "./components/PatientDashboard"

const PatientRoutes = () => {
    return (
        <Switch>
            <Route path="/patient/new" component={NewPatient} />
            <Route path="/patient" component={PatientDashboard} />
        </Switch>
    )
}

export default PatientRoutes