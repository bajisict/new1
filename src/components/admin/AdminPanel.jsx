import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

const drawerWidth = 240;

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('Dashboard');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      window.location.href = '/login';
    }
  }, []);

  useEffect(() => {
    if (selectedMenu === 'Products') {
      fetch('/api/products')
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error('Error loading products:', err));
    }
  }, [selectedMenu]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <List>
          {['Dashboard', 'Users', 'Orders', 'Products'].map((text) => (
            <ListItem button key={text} onClick={() => setSelectedMenu(text)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <AppBar
          position='fixed'
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant='h6'>Admin Panel</Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />

        {selectedMenu === 'Dashboard' && (
          <Typography variant='h4'>Welcome to Admin Panel</Typography>
        )}

        {selectedMenu === 'Products' && (
          <>
            <Typography variant='h5' gutterBottom>Products</Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Content</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>{product.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        )}
      </Box>
    </Box>
  );
}
