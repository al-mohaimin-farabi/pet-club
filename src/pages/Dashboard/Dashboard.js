import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import useAuth from "../../Hooks/useAuth";

const drawerWidth = 200;

function Dashboard(props) {
  const { user, admin, logout } = useAuth();
  useEffect(() => {
    document.title = "Dashboard";
  }, [user.email, admin]);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="text-center">
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
        }}
        to="/dashboard"
      >
        <Button
          className="btn-defult"
          sx={{ mb: 1, mt: 4, width: "95%" }}
          variant="outlined"
          color="success"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-box"
            viewBox="0 0 16 16"
          >
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
          </svg>
          &nbsp; DashBoard
        </Button>
      </NavLink>
      <NavLink
        style={{
          textTransform: "none",
          textDecoration: "none",
          color: "black",
        }}
        to="/"
      >
        <Button
          className="btn-defult"
          sx={{ my: 1, width: "95%" }}
          variant="outlined"
          color="success"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-arrow-left-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
          </svg>
          &nbsp; Home
        </Button>
      </NavLink>

      {!admin && (
        <div className="text-center mt-0">
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={`/dashboard/myorders`}
          >
            <Button
              className="btn-defult"
              sx={{ my: 1, width: "95%" }}
              variant="outlined"
              color="success"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-cart-check-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
              </svg>
              &nbsp; My Orders
            </Button>
          </NavLink>
        </div>
      )}

      {admin && (
        <div className="text-center mt-2">
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={`/dashboard/makeAdmin`}
          >
            <Button
              className="btn-defult"
              sx={{ my: 1, mb: 2, width: "95%" }}
              variant="outlined"
              color="success"
            >
              Make Admin
            </Button>
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={`/dashboard/addfoodProduct`}
          >
            <Button
              className="btn-defult"
              sx={{ my: 1, mb: 2, width: "95%" }}
              variant="outlined"
              color="success"
            >
              Add Food Product
            </Button>
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={`/dashboard/addToyAndAccProduct`}
          >
            <Button
              className="btn-defult"
              sx={{ my: 1, mb: 2, width: "95%" }}
              variant="outlined"
              color="success"
            >
              Add Toy & Accessories Product
            </Button>
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={`/dashboard/manageallorder`}
          >
            <Button
              className="btn-defult"
              sx={{ my: 1, mb: 2, width: "95%" }}
              variant="outlined"
              color="success"
            >
              Manage All Order
            </Button>
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={`/dashboard/manageallproduct`}
          >
            <Button
              className="btn-defult"
              sx={{ my: 1, mb: 2, width: "95%" }}
              variant="outlined"
              color="success"
            >
              Manage All Product
            </Button>
          </NavLink>
        </div>
      )}
      <button
        onClick={logout}
        style={{ width: "95%" }}
        className="btn btn-outline-danger opacity-75 "
      >
        Logout
      </button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
