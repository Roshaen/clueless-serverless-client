import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { NextPage } from "next";
import { Avatar, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Head from "next/head";
import Link from "next/link";
import SidebarFullScreen from "../components/Form/SidebarFullScreen";
import { useSession } from "next-auth/react";
import techstacks from "../../database/techstack";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(
  name: any,
  personName: string | any[],
  theme: { typography: { fontWeightRegular: any; fontWeightMedium: any } }
) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const steps = ["Personal Details", "Skills", "Social Links"];

const index: NextPage = () => {

  const session = useSession();
  const name = session.data?.user.name;
  const email = session.data?.user.email;
  const image = session.data?.user.image;

  const [step, setstep] = useState(0);
  const [username, setusername] = useState("");
  const [college, setcollege] = useState("");
  const [linkedIn, setlinkedIn] = useState("");
  const [blog, setblog] = useState("");
  const [twitter, settwitter] = useState("");
  const [portfolio, setportfolio] = useState("");
  const [github, setgithub] = useState("");

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event: { target: { value: any } }) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div>
      <Head>
        <title>ClueLess | SignUp</title>
      </Head>
      {step == 0 && (
        <div className="overflow-y-hidden">
          <SidebarFullScreen
            img={"/Personal details.png"}
            title={"Personal Details"}
          />
          <div className="lg:ml-[300px] px-[8%] flex flex-col h-screen justify-center">
            <form action="" className="ml-[0px]">
              <h1 className="text-3xl font-semibold py-10 text-center sm:text-left">
                Enter your Details Below
              </h1>
              <Avatar
                alt={name}
                src={image}
                className="w-[138px] h-[138px] mb-10 mx-auto md:mx-0"
              />
              <div className="my-3">
                <TextField
                  id="outlined-basic"
                  label="Enter your Name"
                  variant="outlined"
                  className="w-full"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
              </div>
              <div className="my-3">
                <TextField
                  id="outlined-basic"
                  label={email}
                  variant="outlined"
                  className="w-full bg-[#F4F4F4]"
                  disabled
                />
              </div>
              <button
                className="btn-blue my-3"
                onClick={(e) => setstep(step + 1)}
              >
                Next
              </button>
              <Box sx={{ width: "100%" }} className="mt-10">
                <Stepper activeStep={step} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </form>
          </div>
        </div>
      )}
      {step == 1 && (
        <div className="overflow-y-hidden">
          <SidebarFullScreen img={"/skills.png"} title={"Tell us about your superpowers🚀"} />
          <div className="lg:ml-[300px] px-[8%] flex flex-col h-screen justify-center">
            <form action="" className="ml-[0px]  ">
              <h1 className="text-3xl font-semibold py-10 text-center sm:text-left">
                Describe you and your Skills Below
              </h1>
              <div className="my-3">
                <TextField
                  id="outlined-basic"
                  label="Enter your College name"
                  variant="outlined"
                  className="w-full"
                  value={college}
                  onChange={(e) => setcollege(e.target.value)}
                />
              </div>
              <div className="my-3">
                <TextField
                  id="outlined-basic"
                  label="Enter your Short Bio"
                  variant="outlined"
                  className="w-full"
                  multiline
                />
              </div>
              <div className="my-3">
                <FormControl className="w-full">
                  <InputLabel id="demo-multiple-chip-label">
                    Tech-Stack
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        label="Tech-Stack"
                      />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {techstacks.map((techstack) => (
                      <MenuItem
                        key={techstack}
                        value={techstack}
                        style={getStyles(techstack, personName, theme)}
                      >
                        {techstack}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="space-x-2">
                <button
                  className="btn-blue my-3"
                  onClick={(): void => setstep(step + 1)}
                >
                  Next
                </button>
                <button
                  className="btn-red my-3"
                  onClick={(): void => setstep(step - 1)}
                >
                  Back
                </button>
              </div>
              <Box sx={{ width: "100%" }} className="mt-10">
                <Stepper activeStep={step} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </form>
          </div>
        </div>
      )}
      {step == 2 && (
        <div className="overflow-y-hidden">
          <SidebarFullScreen img={"/social links.png"} title={"Social Links"} />
          <div className="lg:ml-[300px] px-[8%] flex flex-col h-screen justify-center">
            <form action="" className="ml-[0px]  ">
              <h1 className="text-3xl font-semibold py-10 text-center sm:text-left">
                Enter your Social links Below
              </h1>
              <div className="my-3">
                <TextField
                  id="outlined-basic"
                  label="Enter your linkedIn URL"
                  variant="outlined"
                  className="w-full"
                  value={linkedIn}
                  onChange={(e) => setlinkedIn(e.target.value)}
                />
              </div>
              <div className="my-3">
                <TextField
                  id="outlined-basic"
                  label="Enter your linkedIn URL"
                  variant="outlined"
                  className="w-full"
                  value={blog}
                  onChange={(e) => setblog(e.target.value)}
                />
              </div>
              <div className="my-3">
                <TextField
                  id="outlined-basic"
                  label="Enter your linkedIn URL"
                  variant="outlined"
                  className="w-full"
                  value={github}
                  onChange={(e) => setgithub(e.target.value)}
                />
              </div>
              <div className="my-3">
                <TextField
                  id="outlined-basic"
                  label="Enter your linkedIn URL"
                  variant="outlined"
                  className="w-full"
                  value={twitter}
                  onChange={(e) => settwitter(e.target.value)}
                />
              </div>
              <div className="my-3">
                <TextField
                  id="outlined-basic"
                  label="Enter your linkedIn URL"
                  variant="outlined"
                  className="w-full"
                  value={portfolio}
                  onChange={(e) => setportfolio(e.target.value)}
                />
              </div>
              <div className="space-x-4">
                <button className="btn-blue my-3">Submit</button>
                <Link href="/">
                  <button className="btn-red my-3">Skip</button>
                </Link>
              </div>
              <Box sx={{ width: "100%" }} className="mt-10">
                <Stepper activeStep={step} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default index;
