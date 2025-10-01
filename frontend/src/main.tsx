import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider, // Importar o RouterProvider
} from "react-router-dom";
import Estatisticas from './Estatisticas.tsx';
import RefeicaoIndividual from './RefeicaoIndividual.tsx';
import Refeicao from './Refeicao.tsx';
import Header from '../components/Header.tsx';
import BoaRefeicao from './BoaRefeicao.tsx';
import MaRefeicao from './MaRefeicao.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
  },
  {
    path: "/estatisticas",
    element: <Estatisticas/>
  },
  {
    path: "/refeicaoIndividual",
    element: <RefeicaoIndividual/>
  },
   {
    path: "/refeicao",
    element: <Refeicao/>
  },
  {
    path: "/boaRefeicao",
    element: <BoaRefeicao/>
  },
  {
    path: "/maRefeicao",
    element: <MaRefeicao/>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>,
)
