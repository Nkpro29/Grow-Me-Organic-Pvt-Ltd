// import { TreeView } from "@material-ui/lab";
import React from "react";
// import { useEffect, useState } from "react";
import { departmentModel } from "./departmentModel";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  Checkbox,
} from "@mui/material";

const TaskFour: React.FC = () => {
  const department: departmentModel[] = [
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
  
  return (
    <div>
      <Typography variant="h3" component="h2"> 
        Department Table: 
      </Typography>
      {department.map((department) => (
        <Accordion key={department.id}>
          <AccordionSummary>
            <Checkbox/>
            <Typography>{department.department}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {department.sub_departments.map((subDept, index) => (
                <ListItem key={index}>
                  <Checkbox/>
                  <ListItemText primary={subDept} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default TaskFour;
