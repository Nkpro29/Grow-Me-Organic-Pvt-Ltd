import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { fetchData } from "./service";
const DataTable = () => {
    const [api, setApi] = useState([]);
    useEffect(() => {
        return () => {
            fetchData().then((data) => {
                setApi(data);
            });
        };
    }, []);
    return (_jsx(_Fragment, { children: _jsx(Paper, { sx: { width: "100%", overflow: "hidden" }, children: _jsx(TableContainer, { sx: { maxHeight: 1000 }, children: _jsxs(Table, { stickyHeader: true, "aria-label": "sticky table", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "User ID" }), _jsx(TableCell, { children: "ID" }), _jsx(TableCell, { children: "Title" }), _jsx(TableCell, { children: "Body" })] }) }), _jsx(TableBody, { children: api.map((row) => (_jsxs(TableRow, { sx: { "&:last-child td, &:last-child th": { border: 0 } }, children: [_jsx(TableCell, { component: "th", scope: "row", children: row.userId }), _jsx(TableCell, { align: "left", children: row.id }), _jsx(TableCell, { align: "left", children: row.title }), _jsx(TableCell, { align: "left", children: row.body })] }, row.userId))) })] }) }) }) }));
};
export default DataTable;
