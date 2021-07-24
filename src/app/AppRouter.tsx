import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CanchaRouter } from 'app/feature/Cancha/CanchaRouter';
import MainPage from 'app/Main';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';
import { TicketRouter } from 'app/feature/Ticket/TicketRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/ticket" component={TicketRouter} />
        <Route path="/cancha" component={CanchaRouter} />
      </Switch>
    </BrowserRouter>
  );
};
