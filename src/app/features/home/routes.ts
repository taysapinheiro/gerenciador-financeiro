import { Routes } from '@angular/router';
import { Home } from './home';
import { CreateOrEditComponent } from './pages/create-or-edit/create-or-edit';
import { getTransactionByIdResolver } from './pages/create-or-edit/resolvers/get-transaction-by-id-resolver';

export default [
  {
    path: '',
    component: Home,
  },
  {
    path: 'create-transaction',
    component: CreateOrEditComponent,
  },
  {
    path: 'edit-transaction/:id',
    component: CreateOrEditComponent,
    resolve: {
      transaction: getTransactionByIdResolver,
    },
  },
] as Routes;
