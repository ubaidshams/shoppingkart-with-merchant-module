import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, TextField, makeStyles, Checkbox } from "@material-ui/core";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Autocomplete,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import style from "../auth/signup.module.css";
import { motion } from "framer-motion";
import { Country, State, City } from "country-state-city";
import Axios from "../../../apis/Axios";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import "animate.css";
import clsx from "clsx";
import TermsConditions from "../../../pages/auth/TermsConditions";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
// import { OpenLogin } from "../../../features/Login/LoginSlice";
import BackdropSpinner from "../../../components/spinner/BackdropSpinner";
// import { motion, Variants } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width: 50,
  },
  formTextFieldName: {
    width: 300,
    // paddingLeft: 15,
    spacing: 5,
    marginTop: 3,
  },
  formTextFieldOther: {
    spacing: 5,
    marginTop: 3,
    width: 420,
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  passwordField: {
    width: 420,
    height: 40,
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  // Loading state
  const [showBackdrop, setShowBackdrop] = useState(false);

  // Merchant user Details
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("");
  const [commission, setCommission] = useState("");

  // company Details
  const [companyEmail, setCompanyEmail] = useState("");
  const [registerNumber, setRegisterNumber] = useState("");
  const [gstn, setGstn] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyWebAddress, setCompanyWebAddress] = useState("");
  const [companyType, setCompanyType] = useState("");

  const companyTypeList = [
    "Electronic",
    "Textile",
    "Furniture",
    "Medical",
    "Glosary",
    "Cothing",
  ];
  const handleCompanyType = (e) => {
    setCompanyType(e.target.value);
  };
  const defaultCompanyTypeProps = {
    options: companyTypeList,
    getOptionalLabel: (option) => option,
  };

  // Address Details of Company
  const [address, setAddress] = useState({
    buildingInfo: "",
    city: "",
    country: "",
    landmark: "",
    name: "",
    phone: "",
    pincode: "",
    state: "",
    streetInfo: "",
  });

  const [allCountries, setAllCountries] = useState([]);
  const [countryCode, setCountryCode] = useState("IN");
  const [allStates, setAllStates] = useState([]);
  const [allCity, setAllcity] = useState([]);

  const [payload, setPayload] = useState({});
  const [btnCondition, setBtnCondition] = useState(false);
  const [model, setModel] = useState(false);
  const [number1, setNumber1] = useState();

  useEffect(() => {
    let allCountriesData = Country.getAllCountries().map((countryData) => {
      return countryData.name;
    });
    setAllCountries(allCountriesData);
  }, []);

  function enableStateDropDown(countryCode1) {
    let allStatesData = State.getStatesOfCountry(`${countryCode1}`);
    setAllStates(allStatesData);
  }

  function enableCityDropDown(stateCode1) {
    let allCityData = City.getCitiesOfState(countryCode, stateCode1);
    setAllcity(allCityData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowBackdrop(true);
    let currPayload = {
      firstName: fname,
      lastName: lname,
      phone: number1,
      email,
      gender,
      commission,
      role:["MERCHANT"],
      company:{
        email:companyEmail,
        gstn,
        name:companyName,
        phone:companyPhone,
        registerNumber,
        webAddress: companyWebAddress,
        address
      },
    
    };
    setPayload(currPayload);
    console.log(payload);

    // await fetchData(currPayload);

    setShowBackdrop(false);
    toast.success("Successfully Registered Please Check your mail and Verify");
    navigate("/");
  };
  // const header = {
  //   verifyUrl: "http://localhost:3000/reset",
  // };
  // const fetchData = async (currPayload) => {
  //   try {
  //     await Axios.post("/customers", currPayload, { headers: header });
  //     console.log("user registered....");
  //   } catch (error) {
  //     toast.error(error.message);
  //     console.log(error.message);
  //   }
  // };

  return (
    <>
      <br />
      <motion.div className={clsx(style.formCard)}>
        <h1>SignUp to Become a Merchant</h1>
        {/* <section>
          One profile ID is all you need to access all KART services. You
          already have a profile?{" "}
          <a
            onClick={() => {
              dispatch(OpenLogin());
              navigate("/");
            }}
          >
            Find it here{" "}
          </a>
        </section> */}
        <form onSubmit={handleSubmit}>
          <Card
            style={{ backgroundColor: "transparent" }}
            elevation={0}
            className={style.formCardContainer}
          >
            <TextField
              className={classes.formTextFieldName}
              size="small"
              label="First Name"
              id="outlined-size-small"
              variant="outlined"
              required
              value={fname}
              onChange={(e) => {
                setFname(e.target.value);
              }}
            ></TextField>
            <TextField
              className={classes.formTextFieldName}
              size="small"
              label="Last Name"
              id="outlined-size-small"
              variant="outlined"
              required
              value={lname}
              onChange={(e) => {
                setLname(e.target.value);
              }}
            ></TextField>
          </Card>

          <Card
            style={{ backgroundColor: "transparent" }}
            elevation={0}
            className={style.formCardContainer}
          >
            <TextField
              className={classes.formTextFieldName}
              size="small"
              label="Phone Number"
              required
              type="tel"       
              placeholder="9856412537"
              id="outlined-size-small"
              variant="outlined"
              value={number1}
              onChange={(e) => setNumber1(e.target.value)}
            ></TextField>

            <TextField
              className={classes.formTextFieldName}
              size="small"
              label="Email Address"
              id="outlined-size-small email"
              variant="outlined"
              placeholder="exmaple@company.com"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></TextField>
          </Card>

          <Card
            elevation={0}
            style={{ backgroundColor: "transparent" }}
            className={style.formCardContainer}
          >
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <section
                style={{
                  display: "flex",
                  // alignItems: "baseline",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <FormLabel component="legend">Gender</FormLabel>
                <FormControlLabel
                  className={style.radioGroup}
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  className={style.radioGroup}
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  className={style.radioGroup}
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </section>
            </RadioGroup>
          </Card>

          {/* BEGIN :: COMPANY DEATILS  */}

          <Accordion className={style.accordionBar}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{backgroundColor:"#f8981c"}}
            >
              <h2 style={{color:"#fff"}}>Company Detalis</h2>
            </AccordionSummary>
            <AccordionDetails>
              
              <Card
                style={{ backgroundColor: "transparent" }}
                elevation={0}
                className={style.formCardContainer}
              >
                <TextField
                  className={classes.formTextFieldName}
                  size="small"
                  label="Company Name"
                  id="outlined-size-small"
                  variant="outlined"
                  required
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                ></TextField>
                <TextField
                  className={classes.formTextFieldName}
                  size="small"
                  label="Company Email"
                  id="outlined-size-small"
                  variant="outlined"
                  type="email"
                  required
                  value={companyEmail}
                  onChange={(e) => {
                    setCompanyEmail(e.target.value);
                  }}
                ></TextField>
              </Card>
              <Card
                style={{ backgroundColor: "transparent" }}
                elevation={0}
                className={style.formCardContainer}
              >
                <TextField
                  className={classes.formTextFieldName}
                  size="small"
                  label="Company Phone"
                  id="outlined-size-small"
                  variant="outlined"
                  required
                  value={companyPhone}
                  onChange={(e) => {
                    setCompanyPhone(e.target.value);
                  }}
                ></TextField>
                <TextField
                  className={classes.formTextFieldName}
                  size="small"
                  label="Web site"
                  id="outlined-size-small"
                  variant="outlined"
                  required
                  value={companyWebAddress}
                  onChange={(e) => {
                    setCompanyWebAddress(e.target.value);
                  }}
                ></TextField>
              </Card>
              <Card
                style={{ backgroundColor: "transparent" }}
                elevation={0}
                className={style.formCardContainer}
              >
                <TextField
                  className={classes.formTextFieldName}
                  size="small"
                  label="Registration Number"
                  id="outlined-size-small"
                  variant="outlined"
                  required
                  value={registerNumber}
                  onChange={(e) => {
                    setRegisterNumber(e.target.value);
                  }}
                ></TextField>
                <TextField
                  className={classes.formTextFieldName}
                  size="small"
                  label="GSTN"
                  id="outlined-size-small"
                  variant="outlined"
                  required
                  value={gstn}
                  onChange={(e) => {
                    setGstn(e.target.value);
                  }}
                ></TextField>
              </Card>
              <Card
                style={{ backgroundColor: "transparent" }}
                elevation={0}
                className={style.formCardContainer}
              >
                <TextField
                  className={classes.formTextFieldName}
                  size="small"
                  label="Commission will be "
                  id="outlined-size-small"
                  variant="outlined"
                  required
                  value={commission}
                  onChange={(e) => {
                    setCommission(e.target.value);
                  }}
                ></TextField>
                {/* ADD company TYpe here */}
                <TextField
                  className={classes.formTextFieldName}
                  size="small"
                  label="Company Type"
                  id="outlined-size-small"
                  variant="outlined"
                  required
                  placeholder="ADD me in DataLIST"
                  value={companyType}
                  onChange={(e) => {
                    setCompanyType(e.target.value);
                  }}
                ></TextField>
                {/* ADD company TYpe here */}

              </Card>
            </AccordionDetails>
          </Accordion>

          {/* END :: COMPANY DEATILS  */}

          {/* BEGIN :: COMPANY ADDRESS DEATILS  */}

          <Accordion className={style.accordionBar}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{backgroundColor:"#f8981c"}}
            >
              <h2 style={{color:"#fff"}}>Address Detalis</h2>
            </AccordionSummary>
            <AccordionDetails>
              <Card
                style={{ backgroundColor: "transparent" }}
                elevation={0}
                className={style.formCardContainer}
              >
                <TextField
                  className={classes.formTextFieldName}
                  size="small"
                  id="outlined-size-small"
                  label="Contact Person Name"
                  placeholder="John Doe"
                  variant="outlined"
                  value={address.name}
                  required
                  onChange={(e) => {
                    setAddress({ ...address, name: e.target.value });
                  }}
                ></TextField>
                <TextField
                  className={classes.formTextFieldName}
                  size="small"
                  id="outlined-size-small"
                  label="Contact Person Phone"
                  placeholder="9988000000"
                  variant="outlined"
                  value={address.phone}
                  required
                  onChange={(e) => {
                    setAddress({ ...address, phone: e.target.value });
                  }}
                ></TextField>
              </Card>

              <Card
                style={{ backgroundColor: "transparent" }}
                elevation={0}
                className={style.formCardContainer}
              >
                <TextField
                  className={classes.formTextFieldName}
                  size="small"
                  id="outlined-size-small"
                  label="House/Office Info"
                  placeholder="eg-142/87, ABC Apartment"
                  variant="outlined"
                  value={address.buildingInfo}
                  required
                  onChange={(e) => {
                    setAddress({ ...address, buildingInfo: e.target.value });
                  }}
                ></TextField>
                <TextField
                  className={classes.formTextFieldName}
                  size="small"
                  id="outlined-size-small"
                  label="streetInfo"
                  placeholder="eg-4th streetInfo"
                  variant="outlined"
                  value={address.streetInfo}
                  required
                  onChange={(e) => {
                    setAddress({ ...address, streetInfo: e.target.value });
                  }}
                ></TextField>
              </Card>
              <Card
                style={{ backgroundColor: "transparent" }}
                elevation={0}
                className={style.formCardContainer}
              >
                <TextField
                  className={classes.formTextFieldName}
                  size="small"
                  id="outlined-size-small"
                  variant="outlined"
                  value={address.landmark}
                  label="landmark"
                  required
                  placeholder="eg-near This and That"
                  onChange={(e) => {
                    setAddress({ ...address, landmark: e.target.value });
                  }}
                ></TextField>
                <TextField
                  className={classes.formTextFieldName}
                  size="small"
                  variant="outlined"
                  placeholder="eg-895641"
                  label="Pincode"
                  required
                  value={address.pincode}
                  onChange={(e) => {
                    setAddress({ ...address, pincode: e.target.value });
                  }}
                ></TextField>
              </Card>

              {/*BEGIN:: state , contry , city Selection */}
              <Card
                elevation={0}
                style={{ backgroundColor: "transparent" }}
                className={style.formCardContainer}
              >
                {/* country */}
                <FormControl className={classes.formControl}>
                  <InputLabel
                    shrink
                    id="demo-simple-select-placeholder-label-label"
                  >
                    Country
                  </InputLabel>
                  {/* select country code */}
                  <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={address.country}
                    required
                    onChange={(e) => {
                      setAddress({ ...address, country: e.target.value });
                      // set country code
                      let countryCode1 = "";
                      Country.getAllCountries().map((countryData) => {
                        if (countryData.name == e.target.value) {
                          setCountryCode(countryData.isoCode);
                          countryCode1 = countryData.isoCode;
                        }
                      });

                      enableStateDropDown(countryCode1);
                    }}
                    displayEmpty
                    className={classes.selectEmpty}
                  >
                    <MenuItem value=""></MenuItem>
                    {allCountries.map((countryName, i) => {
                      return (
                        <MenuItem value={`${countryName}`} key={`${i}`}>
                          {`${countryName}`}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  <FormHelperText>Select your Country</FormHelperText>
                </FormControl>

                {/* state */}
                <FormControl className={classes.formControl}>
                  <InputLabel
                    shrink
                    id="demo-simple-select-placeholder-label-label"
                  >
                    State
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={address.state}
                    required
                    onChange={(e) => {
                      setAddress({ ...address, state: e.target.value });
                      // set state code
                      let stateCode1 = "";
                      State.getStatesOfCountry(`${countryCode}`).map(
                        (stateData) => {
                          if (stateData.name == e.target.value) {
                            stateCode1 = stateData.isoCode;
                          }
                        }
                      );

                      enableCityDropDown(stateCode1);
                    }}
                    displayEmpty
                    className={classes.selectEmpty}
                  >
                    <MenuItem value=""></MenuItem>
                    {allStates.map((stateName, j) => {
                      return (
                        <MenuItem
                          value={`${stateName.name}`}
                          key={`${j}`}
                        >{`${stateName.name}`}</MenuItem>
                      );
                    })}
                  </Select>
                  <FormHelperText>Select your State</FormHelperText>
                </FormControl>
                {/* cities */}
                <FormControl className={classes.formControl}>
                  <InputLabel
                    shrink
                    id="demo-simple-select-placeholder-label-label"
                  >
                    city
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={address.city}
                    required
                    onChange={(e) => {
                      setAddress({ ...address, city: e.target.value });
                    }}
                    displayEmpty
                    className={classes.selectEmpty}
                  >
                    <MenuItem value=""></MenuItem>
                    {allCity.map((cityName, k) => {
                      return (
                        <MenuItem
                          value={`${cityName.name}`}
                          key={`${k}`}
                        >{`${cityName.name}`}</MenuItem>
                      );
                    })}
                  </Select>
                  <FormHelperText>Select your city</FormHelperText>
                </FormControl>
              </Card>
              {/*BEGIN:: state , contry , city Selection */}
            </AccordionDetails>
          </Accordion>

          {/* END :: COMPANY ADDRESS DEATILS  */}

          <Card
            className={clsx(style.formCardContainer, style.Checkbox)}
            elevation={0}
            style={{ backgroundColor: "transparent" }}
            
          >
            <span
              style={{ marginLeft: "300px", display: "flex", width: "350px" }}
            >
              <FormControlLabel
                // className={style.radioGroup}
                style={{ width: "35px" }}
                value="other"
                checked={btnCondition}
                onClick={() => {
                  setModel();
                  setModel(true);
                }}
                control={<Checkbox />}

                // label="I agree to the Terms Conditions*"
              />
              <span
                style={{
                  display: "inline-block",
                  width: "300px",
                  marginTop: "12px",
                }}
              >
                I agree to the{" "}
                <a
                  href="#"
                  onClick={() => {
                    setModel(true);
                  }}
                >
                  Terms Conditions
                </a>
                *
              </span>
            </span>
          </Card>
          <Card style={{ marginLeft: "300px" }}>
            {model && (
              <TermsConditions
                modelCondition={setModel}
                condition={setBtnCondition}
              />
            )}
          </Card>

          <Card
            elevation={0}
            style={{ backgroundColor: "transparent" }}
            className={style.formCardContainer}
          >
            <button className={style.bn5}>Register</button>
          </Card>
        </form>
        <BackdropSpinner open={showBackdrop} />
      </motion.div>
      <br />

      {/* ================BEGIN :: TAB SIGNUP FORM =======================*/}




      {/* ================ END :: TAB SIGNUP FORM =======================*/}

    </>
  );
};

export default Signup;
