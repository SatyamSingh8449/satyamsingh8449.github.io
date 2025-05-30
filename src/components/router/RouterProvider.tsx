import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../../pages/HomePage';
import BlogPage from '../../pages/BlogPage';
import ProjectsPage from '../../pages/ProjectsPage';
import ContactPage from '../../pages/ContactPage';
import AboutPage from '../../pages/AboutPage';

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};