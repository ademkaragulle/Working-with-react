import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { Card, Container } from '@mui/material';
import { Course } from './component/Course';
import Angular from './images/angular.jpg'
import Bootstrap5 from './images/bootstrap5.png'
import Csharp from './images/ccsharp.png'
import Kompleweb from './images/kompleweb.jpg'
import './App.css'


function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>
          Kart Projesi
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid textAlign="center" container spacing={2} sx={{ marginTop: 10 }} >
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Bootstrap5}
              title="Bootstrap5"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam esse natus quo, optio perspiciatis sint modi laborum alias voluptatem tempora quaerat necessitatibus corporis eveniet praesentium, aliquid veritatis rerum reiciendis!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Csharp}
              title="Csharp"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam esse natus quo, optio perspiciatis sint modi laborum alias voluptatem tempora quaerat necessitatibus corporis eveniet praesentium, aliquid veritatis rerum reiciendis!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Kompleweb}
              title="Kompleweb"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam esse natus quo, optio perspiciatis sint modi laborum alias voluptatem tempora quaerat necessitatibus corporis eveniet praesentium, aliquid veritatis rerum reiciendis!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Angular}
              title="Angular"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam esse natus quo, optio perspiciatis sint modi laborum alias voluptatem tempora quaerat necessitatibus corporis eveniet praesentium, aliquid veritatis rerum reiciendis!"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App
