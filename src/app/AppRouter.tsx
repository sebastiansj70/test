import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeRouter } from 'app/feature/Home/HomeRouter';
import MainPage from 'app/Main';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';
import { ProductoRouter } from 'app/feature/Producto/ProductoRouter';
import { TicketRouter } from 'app/feature/Ticket/TicketRouter';
import { CanchaRouter } from 'app/feature/Cancha/CanchaRouter';

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
