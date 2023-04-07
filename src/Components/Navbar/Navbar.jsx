import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Hidden, Link } from "@mui/material";
import icon from "./../../Images/icon.png";
import { LoginButton } from "../../Views/Login/LoginButton/LoginButton";
import { LogOutButton } from "../../Views/Login/LogOutButton/LogOutButton";
import { SignUpButton } from "../../Views/Login/SignUpButton/SignUpButton";
import { useAuth0 } from "@auth0/auth0-react";

const pages = [
  { message: "Notificaciones", route: "/construction" },
  { message: "Publicar aviso", route: "/posteo" },
];
const settings = ["Ver Perfil", "Mis avisos", "Configuracion de cuenta"];

export default function SearchAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { isAuthenticated } = useAuth0();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Container maxWidth="xl">
      <AppBar position="fixed">
        <Toolbar>
          <Hidden mdDown>
            <img
              src={icon}
              alt="logo"
              style={{ height: "60px", marginRight: "10px" }}
            />
          </Hidden>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              font: "inherit",
            }}
          >
            Promanitas
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={page.route}>
                    <Button color="secondary">{page.message}</Button>
                  </Link>
                </MenuItem>
              ))}
              {!isAuthenticated && (
        <>
          <MenuItem>
                <Link>
                  <LoginButton />
                </Link>
              </MenuItem>

              <MenuItem>
                <Link>
                  <SignUpButton />
                </Link>
              </MenuItem>
        </>
      )}
      </Menu>
              
          </Box>
          <Hidden mdUp>
            <img
              src={icon}
              alt="logo"
              style={{ height: "60px", marginRight: "10px" }}
            />
          </Hidden>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              font: "inherit",
            }}
          >
            Promanitas
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link href={page.route}>
                <Button
                  color="secondary"
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                >
                  {page.message}
                </Button>
              </Link>
            ))}
            {!isAuthenticated && (
              <>
                
                  <Link>
                    <LoginButton />
                  </Link>
                
                  <Link>
                    <SignUpButton />
                  </Link>
                
              </>
            )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {isAuthenticated && (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            )}

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <LogOutButton />
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

// const pages = ['Notificaciones', 'Publicar aviso', 'Iniciar Sesion', "Registrarse"];
// const settings = ['Ver Perfil', 'Mis avisos', 'Configuracion de cuenta', 'Cerrar Sesion'];

// export default function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//   <Container maxWidth="xl">
//     <Toolbar disableGutters>
//       <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//       <Typography
//         variant="h6"
//         noWrap
//         component="a"
//         href="/"
//         sx={{
//           mr: 2,
//           display: { xs: 'none', md: 'flex' },
//           fontFamily: 'monospace',
//           fontWeight: 700,
//           letterSpacing: '.3rem',
//           color: 'inherit',
//           textDecoration: 'none',
//         }}
//       >
//         Promanitas
//       </Typography>

//       <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="menu-appbar"
//           aria-haspopup="true"
//           onClick={handleOpenNavMenu}
//           color="inherit"
//         >
//           <MenuIcon />
//         </IconButton>
//         <Menu
//           id="menu-appbar"
//           anchorEl={anchorElNav}
//           anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'left',
//           }}
//           keepMounted
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'left',
//           }}
//           open={Boolean(anchorElNav)}
//           onClose={handleCloseNavMenu}
//           sx={{
//             display: { xs: 'block', md: 'none' },
//           }}
//         >
//           {pages.map((page) => (
//             <MenuItem key={page} onClick={handleCloseNavMenu}>
//               <Typography textAlign="center">{page}</Typography>
//             </MenuItem>
//           ))}
//         </Menu>
//       </Box>
//       <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//       <Typography
//         variant="h5"
//         noWrap
//         component="a"
//         href=""
//         sx={{
//           mr: 2,
//           display: { xs: 'flex', md: 'none' },
//           flexGrow: 1,
//           fontFamily: 'monospace',
//           fontWeight: 700,
//           letterSpacing: '.3rem',
//           color: 'inherit',
//           textDecoration: 'none',
//         }}
//       >
//         LOGO
//       </Typography>
//       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//         {pages.map((page) => (
//           <Button
//             key={page}
//             onClick={handleCloseNavMenu}
//             sx={{ my: 2, color: 'white', display: 'block' }}
//           >
//             {page}
//           </Button>
//         ))}
//       </Box>

//       <Box sx={{ flexGrow: 0 }}>
//         <Tooltip title="Open settings">
//           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//             <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//           </IconButton>
//         </Tooltip>
//         <Menu
//           sx={{ mt: '45px' }}
//           id="menu-appbar"
//           anchorEl={anchorElUser}
//           anchorOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//           keepMounted
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//           open={Boolean(anchorElUser)}
//           onClose={handleCloseUserMenu}
//         >
//           {settings.map((setting) => (
//             <MenuItem key={setting} onClick={handleCloseUserMenu}>
//               <Typography textAlign="center">{setting}</Typography>
//             </MenuItem>
//           ))}
//         </Menu>
//       </Box>
//     </Toolbar>
//   </Container>
//     </AppBar>
//   );
// }

// import React from "react";
// import styled from "@emotion/styled";
// import { Search } from "@mui/icons-material";
// import { AppBar, Button, InputBase, Toolbar } from "@mui/material";
// import { alpha, Box } from "@mui/system";
// import SearchIcon from '@mui/icons-material/Search';

// export default function Navbar(props) {
//   const Search = styled("div")(({ theme }) => ({
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(1),
//       width: "auto",
//     },
//   }));

//   const SearchIconWrapper = styled("div")(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: "inherit",
//     "& .MuiInputBase-input": {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create("width"),
//       width: "100%",
//       [theme.breakpoints.up("sm")]: {
//         width: "12ch",
//         "&:focus": {
//           width: "20ch",
//         },
//       },
//     },
//   }));
//   return (
//     <AppBar position="fixed">
//       <Toolbar>
//         <Box sx={{ flexGrow: 3, display: { xs: "none", md: "flex" } }}></Box>
//         <Box sx={{ flexGrow: 3, display: { xs: "none", md: "flex" } }}>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ "aria-label": "search" }}
//             />
//           </Search>
//         </Box>
//         <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//           <Button sx={{ my: 2, color: "white", display: "block" }}>
//             Iniciar sesion
//           </Button>
//           <Button sx={{ my: 2, color: "white", display: "block" }}>
//             Crear Cuenta
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }
