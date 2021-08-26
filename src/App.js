import { Switch, Route, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import { adminRoutes } from "./routes/index";
import Frame from "./component/Frame/Index";
import { isLogined } from "./utils/auth";
import "./mock";
import "./App.css";

function App() {
  return isLogined() ? (
    <Frame>
      <Switch>
        {adminRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={(routeProps) => {
                return <route.component {...routeProps} />;
              }}
            />
          );
        })}
        <Redirect to={adminRoutes[0].path} from="/admin" />
        <Redirect to="/404" />
      </Switch>
    </Frame>
  ) : (
    <Redirect to="/login" />
  );
}

export default App;
