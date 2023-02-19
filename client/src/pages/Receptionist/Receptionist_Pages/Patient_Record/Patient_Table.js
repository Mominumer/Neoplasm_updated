import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Box,
  Card,
  Container,
  IconButton,
  TableFooter,
  TablePagination,
} from "@material-ui/core";
import Axios from "axios";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import Toast_Comp from "../../../../components/Toast/Toast_Comp";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    height: "100%",
    paddingTop: "30px",
  },
});

const PatientTable = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const [data, setData] = useState([]);
  const history=useHistory();
  const userList = async () => {    
    const user = await Axios.get("patient/getpatient")
    setData(user.data.patientInfo)
    console.log(user.data.patientInfo)

  };
  const deletepatient = async (contactInfo)=> {
    const user= await Axios.get(`patient/getpatient/${contactInfo}`,{
    })
     if(user){
      console.log("deleted successfully")
      setToast(true); 
      userList();
    }
     else{
      console.log("something went wrong")
     }
   }
 const editpatient = async (user)=>{
     history.push({
       pathname: "/edit-patient",
       state:{
        user:user
      }
     });
   }
   useEffect(() => {
     userList()
   }, []);

  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Container className={classes.root}>
      <Toast_Comp
          setToast={setToast}
          renderToast={toast}
          msg="User Deleted Succesfully"
        />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-dark ">
              <TableCell align="center" className="text-light">
                Patient Name
              </TableCell>
              <TableCell align="center" className="text-light">
                Age
              </TableCell>
              <TableCell align="center" className="text-light">
               Gender
              </TableCell>
              
              <TableCell align="center" className="text-light">
                Contact_info
              </TableCell>
              <TableCell align="center" className="text-light">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((row) => (
              <TableRow key={row.patientName}>
                <TableCell component="th" scope="row" align="center">
                  {row.patientName}
                </TableCell>

                <TableCell align="center">{row.age}</TableCell>
                <TableCell align="center">
                {row.gender}
                </TableCell>
                <TableCell align="center">
                {row.contactInfo}
                </TableCell>
                <TableCell className="" align="center">
                  <IconButton  onClick={()=>editpatient(row)} >  
                    <EditIcon color="primary" />
                  </IconButton >
                  <IconButton onClick = {()=>deletepatient(row._id)}>
                    <DeleteIcon style={{ color: "red" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 7, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PatientTable;
