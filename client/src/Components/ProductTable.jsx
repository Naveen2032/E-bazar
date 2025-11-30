import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function ProductTable({ products, state, setState }) {
  const handleDelete = (id) => {
    let auth = localStorage.getItem("authToken") || "";
    axios
      .delete(`http://localhost:7000/user/delete-product/${id}`, {
        headers: { "auth-token": auth },
      })
      // .delete('http://localhost:7000/user/delete-product/'+id)
      .then((res) => {
        // console.log(res.data);
        if (res.data.success) {
          setState(!state);
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
        // alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead
          sx={{
            background: "linear-gradient(to right,#4caf50 30%, #2e7d32 90%)",
            color: "white",
          }}
        >
          <TableRow>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Sl No
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }} colSpan={2}>
              Product
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Category
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Price
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Description
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.length > 0 ? (
            products?.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>
                  <img
                    src={`http://localhost:7000/uploads/product/${row?.picture}`}
                    style={{ width: "100px" }}
                    alt="product picture"
                  />
                </TableCell>
                <TableCell>{row?.title}</TableCell>
                <TableCell>{row?.category}</TableCell>
                <TableCell>{row?.price}</TableCell>
                <TableCell>
                  <TextField
                    value={row?.description}
                    fullWidth
                    multiline
                    rows={2}
                    disabled
                  />
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDelete(row?._id)}
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                  <Button
                    component={Link}
                    to={`/edit/${row?._id}`}
                    variant="contained"
                    color="info"
                  >
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} align="center">
                no data found!
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
