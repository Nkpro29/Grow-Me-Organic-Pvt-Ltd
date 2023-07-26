import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, ListItemText, Checkbox, } from "@mui/material";
const TaskFour = () => {
    const department = [
        {
            id: "1",
            department: "Customer_Service",
            sub_departments: ["Support", "Customer_Success"],
        },
        {
            id: "2",
            department: "Design",
            sub_departments: ["Graphic_Design", "Product_Design", "Web_Design"],
        },
        {
            id: "3",
            department: "Development",
            sub_departments: ["Android_App_Development", "Web_Development"],
        },
    ];
    return (_jsxs("div", { children: [_jsx(Typography, { variant: "h3", component: "h2", children: "Department Table:" }), department.map((department) => (_jsxs(Accordion, { children: [_jsxs(AccordionSummary, { children: [_jsx(Checkbox, {}), _jsx(Typography, { children: department.department })] }), _jsx(AccordionDetails, { children: _jsx(List, { children: department.sub_departments.map((subDept, index) => (_jsxs(ListItem, { children: [_jsx(Checkbox, {}), _jsx(ListItemText, { primary: subDept })] }, index))) }) })] }, department.id)))] }));
};
export default TaskFour;
