import MUIDataTable from "mui-datatables";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkUnreadChatAltRoundedIcon from "@mui/icons-material/MarkUnreadChatAltRounded";
// import Swal from "sweetalert2/dist/sweetalert2.js";

// import "sweetalert2/src/sweetalert2.scss";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  CssBaseline,
  Dialog,
  Grid,
  InputLabel,
  Select,
} from "@material-ui/core";
import DnsIcon from "@mui/icons-material/Dns";
import EditIcon from "@mui/icons-material/Edit";
import { useStyles } from "../../Header/HeaderStyles";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// import image from "../../../img/adduser1.png";
import image from "../../../img/adduser2.jpg";
//--------------/Add user------------------

//--------------Add user pop-up --------------

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MaterialTable from "material-table";
import { useEffect, useState } from "react";
import axios from "axios";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import { id } from "date-fns/locale";
import api from "../../../utils/api";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// toast.configure();

//--------------Add user pop-up --------------

const ListRequestforuser = () => {
  const [openModel3, setOpenModel3] = React.useState(false);
  const [uservalue, setUservalue] = React.useState({});
  const [openModel4, setOpenModel4] = React.useState(false);
  const classes = useStyles();
  const handleModel4Open = (s) => {
    setOpenModel4(true);
    console.log(s, "Required Value");
  };
  const handleModel4Close = () => {
    setOpenModel4(false);
  };
  const handleModel3Open = (s) => {
    setOpenModel3(true);
    setUservalue(s);
  };
  const handleModel3Close = () => {
    setOpenModel3(false);
  };
  const platformFn = (s) => {
    // usercomment();
    handleModel3Open(s);
    console.log(s, "row server id");
  };

  const infcmt = (s) => {
    // handleModel3Open();
    // submitcomment(e);
    handleModel4Open(s);
  };

  const columns = [
    {
      name: "Id",
      label: "ID",
      options: {
        filter: true,
        sort: true,
        // show: false,
        display: false,
        // hideHeader: false,
        // setCellProps: () => ({
        //   style: {
        //     display: "none",
        //   },
        // }),
      },
    },
    {
      name: "Sl no",
      label: "SL.NO",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, update) => {
          let rowIndex = Number(tableMeta.rowIndex) + 1;
          return <span>{rowIndex}</span>;
        },
        // setCellProps: () => {
        //   return { align: "center" };
        // },
        setCellProps: () => ({
          style: {
            minWidth: "80px",
            maxHeight: "30px",
            textAlign: "center",
            // maxWidth: "150px",
          },
        }),
      },
    },

    {
      name: "Creator",
      label: " Creator",
      options: {
        filter: true,
        sort: true,
        setCellProps: () => ({
          style: {
            minWidth: "120px",
            maxHeight: "30px",
            textAlign: "center",
            // maxWidth: "150px",
          },
        }),
      },
    },
    // {
    //   name: "Asset_ID",
    //   label: "Asset ID",
    //   options: {
    //     filter: true,
    //     sort: true,
    //   },
    // },
    {
      name: "Start_Date",
      label: "Start Date",
      options: {
        customBodyRender: (value, tableMeta, update) => {
          return <span>{value.slice(0, 10)}</span>;
        },
        filter: true,
        sort: false,
        setCellProps: () => ({
          style: {
            minWidth: "100px",
            maxHeight: "30px",
            textAlign: "center",
            // maxWidth: "150px",
          },
        }),
      },
    },
    {
      name: "End_Date",
      label: " End Date",
      options: {
        customBodyRender: (value, tableMeta, update) => {
          return <span>{value.slice(0, 10)}</span>;
        },
        filter: true,
        sort: false,
        setCellProps: () => ({
          style: {
            minWidth: "100px",
            maxHeight: "30px",
            textAlign: "center",
            // maxWidth: "150px",
          },
        }),
      },
    },
    {
      name: "Manufacturer",
      label: " Manufacturer",
      options: {
        filter: true,
        sort: false,
        setCellProps: () => ({
          style: {
            minWidth: "100px",
            maxHeight: "30px",
            textAlign: "center",
            // maxWidth: "150px",
          },
        }),
      },
    },
    {
      name: "Number_Of_Servers",
      label: "Number Of Servers",
      options: {
        filter: true,
        sort: false,
        setCellProps: () => ({
          style: {
            minWidth: "100px",
            maxHeight: "30px",
            textAlign: "center",
            // maxWidth: "150px",
          },
        }),
      },
    },
    {
      name: "Operating_System",
      label: " Operating_System",
      options: {
        filter: true,
        sort: false,
        setCellProps: () => ({
          style: {
            minWidth: "100px",
            maxHeight: "30px",
            textAlign: "center",
            // maxWidth: "150px",
          },
        }),
      },
    },
    {
      name: "Cpu_model",
      label: "Cpu model",
      options: {
        filter: true,
        sort: false,
        setCellProps: () => ({
          style: {
            minWidth: "150px",
            maxHeight: "30px",
            textAlign: "center",
            // maxWidth: "150px",
          },
        }),
      },
    },
    {
      name: "CPU_Sockets",
      label: "CPU_Sockets",
      options: {
        filter: true,
        sort: false,
        setCellProps: () => ({
          style: {
            minWidth: "100px",
            maxHeight: "30px",
            textAlign: "center",
            // maxWidth: "150px",
          },
        }),
      },
    },
    {
      name: "DIMM_Size",
      label: "DIMM Size",
      options: {
        filter: true,
        sort: false,
        setCellProps: () => ({
          style: {
            minWidth: "100px",
            maxHeight: "30px",
            textAlign: "center",
            // maxWidth: "150px",
          },
        }),
      },
    },
    {
      name: "DIMM_Capacity",
      label: "DIMM_Capacity ",
      options: {
        filter: true,
        sort: false,
        setCellProps: () => ({
          style: {
            minWidth: "100px",
            maxHeight: "30px",
            textAlign: "center",
            // maxWidth: "150px",
          },
        }),
      },
    },
    {
      name: "Storage_Vendor",
      label: "Storage Vendor",
      options: {
        filter: true,
        sort: false,
        setCellProps: () => ({
          style: {
            minWidth: "100px",
            maxHeight: "30px",
            textAlign: "center",
            // maxWidth: "150px",
          },
        }),
      },
    },
    {
      name: "Storage_Controller",
      label: "Storage Controller",
      options: {
        filter: true,
        sort: false,
        setCellProps: () => ({
          style: {
            minWidth: "100px",
            maxHeight: "30px",
            textAlign: "center",
            // maxWidth: "150px",
          },
        }),
      },
    },
    {
      name: "Storage_Capacity",
      label: "Storage Capacity",
      options: {
        filter: true,
        sort: false,
        setCellProps: () => ({
          style: {
            minWidth: "100px",
            maxHeight: "30px",
            textAlign: "center",
            // maxWidth: "150px",
          },
        }),
      },
    },
    {
      name: "Number_Of_Network_Ports",
      label: "Number Of Network Ports",
      options: {
        filter: true,
        sort: false,
        setCellProps: () => ({
          style: {
            minWidth: "100px",
            maxHeight: "30px",
            textAlign: "center",
            // maxWidth: "150px",
          },
        }),
      },
    },
    {
      name: "Network_speed",
      label: "Network speed",
      options: {
        filter: true,
        sort: false,
        setCellProps: () => ({
          style: {
            minWidth: "100px",
            maxHeight: "30px",
            textAlign: "center",
            // maxWidth: "150px",
          },
        }),
      },
    },
    {
      name: "Network_Type",
      label: "Network Type",
      options: {
        filter: true,
        sort: false,
        setCellProps: () => ({
          style: {
            minWidth: "100px",
            maxHeight: "30px",
            textAlign: "center",
            // maxWidth: "150px",
          },
        }),
        customBodyRender: (value, tableMeta, updateValue) => {
          // console.log(value);
          if (value === true) {
            return (
              <>
                <div className="activeClass">
                  <span>Private</span>
                </div>
              </>
            );
          } else {
            return (
              <>
                <div className="inactiveClass">
                  <span>Public</span>
                </div>
              </>
            );
          }
        },
      },
    },
    {
      name: "Special_Switching_Needs",
      label: "Special Switching Needs",
      options: {
        filter: true,
        sort: false,
        setCellProps: () => ({
          style: {
            minWidth: "200",
            maxHeight: "30px",
            textAlign: "center",
            // maxWidth: "150px",
          },
        }),
      },
    },

    {
      name: "User_Comments",
      label: "USer comments",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <button
              //   className="ppBtnClass"
              // onChange={() => console.log(value, tableMeta.rowData[0])}
              onClick={() => platformFn(tableMeta.rowData[19])}
            >
              <MarkUnreadChatAltRoundedIcon />
            </button>
          );
        },
        setCellProps: () => ({
          style: {
            minWidth: "80px",
            maxHeight: "30px",
            textAlign: "center",
            maxWidth: "150px",
          },
        }),
      },
    },
    {
      name: "Infraadmin_Comments",
      label: "Infra admin comment",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <button
              //   className="ppBtnClass"
              // onChange={() => console.log(value, tableMeta.rowData[0])}
              onClick={() => infcmt(tableMeta.rowData[0])}
            >
              <MarkUnreadChatAltRoundedIcon />
            </button>
          );
        },
        setCellProps: () => ({
          style: {
            minWidth: "80px",
            maxHeight: "30px",
            textAlign: "center",
            maxWidth: "150px",
          },
        }),
      },
    },
  ];

  //----------------------- /Add User-----------------

  const [userRole, setUserRole] = useState("");

  const handleUserRole = () => {
    // setUserRole(event.target.value);
  };
  console.log(userRole, "userRole");

  //------------------------ Add User Pop-up ---------

  const [usersData, setUsersData] = React.useState([]);
  // const [updatedUsers, setUpdatedUsers] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [editUserOpen, setEditUserOpen] = React.useState(false);

  const handleEditUserOpen = () => {
    setEditUserOpen(true);
  };
  const handleEditUserClose = () => {
    setEditUserOpen(false);
  };
  const [update, updateUser] = React.useState(false);
  const handleUpdate = () => updateUser(true); //onClick={() => { handleOpen(); handleChange() }}
  // const handleUpdate ={() => { updateUser(true); handleRowClick(); }};
  const handleCloseUpdate = () => updateUser(false);

  const handleRowClick = (rowData, rowMeta) => {
    handleUpdate();
    console.log(rowData);
  };
  //------------------------ Add User Pop-up ---------

  const options = {
    filterType: "checkbox",
    onRowClick: handleRowClick,
    viewColumns: false,
    selectableRows: false,
    print: false,

    filterOptions: {
      useDisplayedColumnsOnly: true,
    },
  };

  // const handleUserUpdate = (updatedRows) => {
  //   setUpdatedUsers(updatedRows);
  //   console.log(updatedUsers);
  // };

  const handleAddUser = () => {
    handleClose();
    setUser();
    console.log();
  };

  // }, []);
  useEffect(() => {
    getUsersUrl();
  }, []);
  const getUsersUrl = async () => {
    const res = await api.get("list_request");
    setUsersData(res.data.Listusers);
    console.log("mm", res);
  };
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const [Infraadmin_Comments, setInfraadmin_Comments] = useState(" ");

  function submitcomment(e) {
    e.preventDefault();
    let a = {
      Infraadmin_Comments: Infraadmin_Comments,
    };
    console.log("data", a);
    // console.log(a, "a");
    api
      .post("update_ia_comments", a)
      .then((res) => {
        // setData(res.data);
        console.log("res", res);
        // toast.success("add susses");
        alert("message added");

        // history.push('/login')
      })
      .catch((err) => {
        console.log(err);

        alert("error added");
      });
    // handleModel4Close();
    // if (!post) return "No post!";
  }
  return (
    <>
      <Dialog open={openModel3} className={classes.dialog}>
        <Container
          component="main"
          className={classes.dialogplatformContainer}
          style={{ alignContent: "center" }}
        >
          {/* <CssBaseline /> */}
          {/* <div className={classes.dialogPaper}> */}
          <Typography component="h1" variant="h6" class="mt-2" align="center">
            User comments
          </Typography>

          <div class="platformData mt-4">
            {/* <ReactJson src={platformInfo} theme="monokai" /> */}
            <div>
              <Container>
                <Card sx={{ minWidth: 300 }}>
                  <CardContent>
                    <ul>{uservalue}</ul>

                    <Typography variant="body2">
                      {/* well meaning and kindly. */}
                      <br />
                      {/* {'"a benevolent smile"'} */}
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Container>
            </div>
          </div>
          <div
            style={{
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{ width: "25ch" }}
              variant="contained"
              color="primary"
              className={classes.cancel}
              onClick={handleModel3Close}
              style={{ justifyContent: "center" }}
            >
              Close
            </Button>
          </div>
        </Container>
      </Dialog>

      <Dialog open={openModel4} className={classes.dialog}>
        {/* <Box className={classes.dialogPaper}> */}
        <Container
          component="main"
          className={classes.dialogContainer}
          sx={{ minWidth: 300 }}
        >
          <CssBaseline />
          <div className={classes.dialogPaper} sx={{ minWidth: 300 }}>
            <Typography component="h1" variant="h6">
              Infra Admin Comments
            </Typography>
            {/* <Button variant="contained" >
                Send
              </Button> */}

            <form
              className={classes.form}
              noValidate
              onSubmit={(e) => submitcomment(e)}
              // initialValues={}
              sx={{ minWidth: 300 }}
            >
              <Grid item xs={12} sx={{ minWidth: 300 }}>
                <Grid
                  item
                  xs={15}
                  sx={{ minWidth: 300 }}
                  sm={{ minWidth: 300 }}
                >
                  <TextField
                    variant="outlined"
                    required
                    sx={{ minWidth: 300 }}
                    xs={{ minWidth: 300 }}
                    size="medium"
                    fullWidth="true"
                    id="Infraadmin_Comments"
                    label="Infra Admin Comments"
                    name="Infraadmin_Comments"
                    placeholder="Infraadmin Comments"
                    focused
                    type="text"
                    // value={Infraadmin_Comments}
                    onChange={(e) => setInfraadmin_Comments(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                //   type="submit"
                // fullWidth
                type="submit"
                // value="Submit"
                sx={{ width: "25ch" }}
                variant="contained"
                // color="success"
                className={classes.add}
              >
                Save
              </Button>
              <Button
                //   type="submit"
                // fullWidth
                sx={{ width: "25ch" }}
                variant="contained"
                color="primary"
                className={classes.cancel}
                onClick={handleModel4Close}
              >
                Cancel
              </Button>
            </form>
          </div>
        </Container>
      </Dialog>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <Box sx={{ width: "100%", typography: "body2" }}>
          <div>
            <MUIDataTable
              title={"List server Request"}
              data={usersData}
              columns={columns}
              options={options}
            />

            {/* <MaterialTable title={"Users"} columns={columns} data={usersData} /> */}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default ListRequestforuser;
