import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from '../pages/Landing';
import TeacherFormPage from '../pages/TeacherForm';
import TeacherListPage from '../pages/TeacherList';

export default function rootRoutes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={LandingPage}/>
      <Route path="/teacher/list" exact component={TeacherListPage}/>
      <Route path="/teacher/form" exact component={TeacherFormPage}/>
    </BrowserRouter>
  );
};