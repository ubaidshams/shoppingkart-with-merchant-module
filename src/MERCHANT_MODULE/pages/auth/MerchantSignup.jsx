import React, { useState, useEffect } from "react";
import Styles from "./signup.module.css";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import {
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,Box,
  RadioGroup,
  FormControlLabel,
  Radio,Card, Checkbox,
  MenuItem,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { Country, State, City } from "country-state-city";
import Axios from "../../../apis/Axios";
import TermsConditions from "./TermsAndConditions"
import BackdropSpinner from "../../../components/spinner/BackdropSpinner";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return ["User information", "Company Information", "Company Address"];
}

const BasicForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="firstName"
        rules={{
          required: "First Name required",
          minLength: { value: 2, message: "min 2 character" },
          maxLength: { value: 20, message: "max 20 characters" },
          pattern: {
            value: /^[a-zA-Z][a-zA-Z ]*/,
            message: "only character allowed",
          },
        }}
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.firstName)}
            helperText={
              errors.firstName?.message ||
              errors.firstName?.pattern ||
              errors.firstName?.minLength ||
              errors.firstName?.maxLength
            }
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        rules={{
          required: "Last Name required",
          minLength: { value: 2, message: "min 2 character" },
          maxLength: { value: 20, message: "max 20 characters" },
          pattern: {
            value: /^[a-zA-Z][a-zA-Z ]*/,
            message: "only character allowed",
          },
        }}
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            error={Boolean(errors.lastName)}
            helperText={
              errors.lastName?.message ||
              errors.lastName?.pattern ||
              errors.lastName?.minLength ||
              errors.lastName?.maxLength
            }
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="emailAddress"
        rules={{
          required: "Email ID required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "email type is not valid",
          },
        }}
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="eg: jhon@example.com"
            fullWidth
            error={Boolean(errors.emailAddress)}
            helperText={
              errors.emailAddress?.message || errors.emailAddress?.pattern
            }
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="phone"
        rules={{
          required: "Phone number required",
          minLength: { value: 10, message: " must be 10 digits" },
          maxLength: { value: 10, message: "maximum 10 Digits" },
          pattern: {
            value: /^[0-9]\d*(\d+)?$/i,
            message: "only Numbers are allowed",
          },
        }}
        render={({ field }) => (
          <>
            <TextField
              id="phone-number"
              label="Phone Number"
              variant="outlined"
              placeholder="Enter Your Phone Number"
              fullWidth
              error={Boolean(errors.phone)}
              helperText={
                errors.phone?.message ||
                errors.phone?.pattern ||
                errors.phone?.minLength === "minLength" ||
                errors.phone?.maxLength
              }
              margin="normal"
              {...field}
            />
          </>
        )}
      />

      <Controller
        control={control}
        style={{ display: "flex" }}
        name="gender"
        rules={{ required: true }}
        render={({ field }) => (
          <Box  >
            <Typography variant="h6">Select Gender</Typography>
          <RadioGroup {...field} style={{ flexDirection: "row" , justifyContent:"center"}}>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
          </Box>
        )}
      />
    </>
  );
};
const CompanyDeltails = () => {
  const {
    control,setValue,
    formState: { errors },
  } = useFormContext();
  const [otherCompanyType , setOtherCompanyType]=useState("")
  let companytypeList = ["Beauty", "Pharmacy", "Grooming", "Clothing","Electronic", "Hardware", "Furniture", "Appliances", "Books","Toys", "Other"];

  return (
    <>
    <Typography variant="h5"> Company Information</Typography>

      <Controller
        control={control}
        name="companyName"
        rules={{
          required: "Company Name required",
          minLength: { value: 4, message: "min 4 character" },
          maxLength: { value: 30, message: "max 30 characters" },
          pattern: {
            value: /^[a-zA-Z][a-zA-Z ]*/,
            message: "only character allowed",
          },
        }}
        render={({ field }) => (
          <TextField
            id="companyName"
            label="Company Name"
            variant="outlined"
            placeholder="Enter Your Company Name"
            fullWidth
            error={Boolean(errors.companyName)}
            helperText={
              errors.companyName?.message ||
              errors.companyName?.pattern ||
              errors.companyName?.minLength ||
              errors.companyName?.maxLength
            }
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="companyEmail"
        rules={{
          required: "Email ID required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "email type is not valid",
          },
        }}
        render={({ field }) => (
          <TextField
            id="email"
            label="Company Email"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            error={Boolean(errors.companyEmail)}
            helperText={
              errors.companyEmail?.message || errors.companyEmail?.pattern
            }
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="companyPhone"
        rules={{
          required: "Phone number required",
          minLength: { value: 10, message: "must be 10 digit" },
          maxLength: { value: 10, message: "maximum 10 Digit" },
          pattern: {
            value: /^[0-9]\d*(\d+)?$/i,
            message: "Please enter an integer",
          },
        }}
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Company Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            error={Boolean(errors.companyPhone)}
            helperText={
              errors.companyPhone?.message ||
              errors.companyPhone?.minLength ||
              errors.companyPhone?.pattern ||
              errors.companyPhone?.maxLength
            }
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="gstn"
        rules={{
          required: "GSTN required",
          minLength: { value: 6, message: "min 6 character" },
          maxLength: { value: 30, message: "max 30 characters" },
          pattern: {
            value: /^[A-Za-z0-9]*$/,
            message: "only Alphaneumeric value allow",
          },
        }}
        render={({ field }) => (
          <TextField
            id="gstn"
            label="Company GSTN"
            variant="outlined"
            placeholder="Enter Your GSTN"
            fullWidth
            error={Boolean(errors.gstn)}
            helperText={
              errors.gstn?.message ||
              errors.gstn?.pattern ||
              errors.gstn?.minLength ||
              errors.gstn?.maxLength
            }
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="registerNumber"
        rules={{
          required: "Store Registration Number required",
          minLength: { value: 6, message: "min 6 character" },
          maxLength: { value: 30, message: "max 30 characters" },
          pattern: {
            value: /^[A-Za-z0-9]*$/,
            message: "only Alphaneumeric value allow",
          },
        }}
        render={({ field }) => (
          <TextField
            id="registerNumber"
            label="Company Registeration Number"
            variant="outlined"
            placeholder="Enter Your registeration Number"
            fullWidth
            error={Boolean(errors.registerNumber)}
            helperText={
              errors.registerNumber?.message ||
              errors.registerNumber?.pattern ||
              errors.registerNumber?.minLength ||
              errors.registerNumber?.maxLength
            }
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="webAddress"
        rules={{ required: "company website required" }}
        render={({ field }) => (
          <TextField
            id="webAddress"
            label="Company Website"
            variant="outlined"
            placeholder="Enter Your web Address"
            fullWidth
            error={Boolean(errors.webAddress)}
            helperText={errors.webAddress?.message}
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="commission"
        rules={{
          required: "provide commission",
          min: { value: 10, message: "min 10 % commission " },
          max: { value: 65, message: "maximum 65% commission we take" },
          pattern: {
            value: /^[0-9]\d*(\d+)?$/i,
            message: "only Number are allow",
          },
        }}
        render={({ field }) => (
          <TextField
            title="Commission you are providing to sell on ShoppingKart"
            id="commission"
            label="commission"
            variant="outlined"
            placeholder="Enter Your commission"
            fullWidth
            error={Boolean(errors.commission)}
            helperText={
              errors.commission?.message ||
              errors.commission?.min ||
              errors.commission?.max ||
              errors.commission?.pattern
            }
            type="number"
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        name="type"
        control={control}
        render={() => (
        <>
            <TextField
              select
              fullWidth
              required
              variant="outlined"
              placeholder="Enter Your Company Type"
              label="Company Type"
              margin="normal"
              defaultValue={""}
              onChange={(e)=>{
                setValue("type", e.target.value, {shouldDirty:true})
                setOtherCompanyType(e.target.value)
              }}
            
            >
              {companytypeList.map((cType, i) => {
                return (
                  <MenuItem value={`${cType}`} key={`${i}`}>
                    {`${cType}`}
                  </MenuItem>
                );
              })}
            </TextField>
        </>
        )}
      />

      {/* BEGNIN :: Other Company type */}
      <div style={{ display: "flex", justifyContent: "center " }}>
      
        {otherCompanyType == "Other" && (

            <Controller
                name="companyOthertype"
                control={control}
                render={({ field }) => (
                  <>
                    <TextField
                      fullWidth 
                      required
                      margin="normal"
                      {...field}
                      id="outlined-size-small"
                      label="Company type"
                      placeholder="Enter Company type"
                      variant="outlined"
                    ></TextField>
                  </>
                  )}
            />

          
        )}
    </div>

      {/* END :: other company type */}


    </>
  );
};
const CompanyAddress = () => {
  const {
    control,
    formState: { errors },
    setValue
  } = useFormContext();

  // terms and Conditon model
  const [model , setModel]=useState(false)
  const [btnCondition , setBtnCondition]= useState(false)
  // STATE COUNTRY API
  const [allCountries, setAllCountries] = useState([]);
  const [countryCode, setCountryCode] = useState("IN");
  const [allStates, setAllStates] = useState([]);
  const [allCity, setAllcity] = useState([]);

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

  return (
    <>
    <Typography variant="h5"> Company Adderss Details</Typography>
      <Controller
        control={control}
        name="buldingInfo"
        rules={{ required: "Bulding Information required" }}
        render={({ field }) => (
          <TextField
            id="buldingInfo"
            label="Bulding Information"
            variant="outlined"
            placeholder="Bulding no/ House no"
            fullWidth
            error={Boolean(errors.buldingInfo)}
            helperText={errors.buldingInfo?.message}
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="landmark"
        rules={{
          required: "landmark required",
          minLength: { value: 4, message: "min 4 character" },
          maxLength: { value: 50, message: "max 50 characters" },
        }}
        render={({ field }) => (
          <TextField
            id="landmark"
            label="Landmark"
            variant="outlined"
            placeholder="Enter landmark"
            fullWidth
            error={Boolean(errors.landmark)}
            helperText={
              errors.landmark?.message ||
              errors.landmark?.minLength ||
              errors.landmark?.maxLength
            }
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="streetInfo"
        rules={{
          required: "please provide Street information",
          minLength: { value: 4, message: "min 4 character" },
          maxLength: { value: 150, message: "max 150 characters" },
        }}
        render={({ field }) => (
          <TextField
            id="streetInfo"
            label="Street Info"
            variant="outlined"
            placeholder="Enter streetInfo"
            fullWidth
            error={Boolean(errors.streetInfo)}
            helperText={
              errors.streetInfo?.message ||
              errors.streetInfo?.minLength ||
              errors.streetInfo?.maxLength
            }
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="pincode"
        rules={{
          required: "Pincode required",
          minLength: { value: 6, message: "must be 6 digit" },
          maxLength: { value: 6, message: "maximum 6 Digit" },
          pattern: {
            value: /^[0-9]\d*(\d+)?$/i,
            message: "Please enter Number",
          },
        }}
        render={({ field }) => (
          <TextField
            id="pincode"
            label="Pincode"
            variant="outlined"
            placeholder="Enter pincode"
            fullWidth
            error={Boolean(errors.pincode)}
            helperText={
              errors.pincode?.message ||
              errors.pincode?.pattern ||
              errors.pincode?.minLength ||
              errors.pincode?.maxLength
            }
            margin="normal"
            {...field}
          />
        )}
      />

      {/*BEGIN :: Select Country state  city */}
    

        {/* country */}
          <Controller
            rules={{ requied: true }}
            control={control}
            name="country"
            render={() => (
              <>
                <TextField
                  select
                  fullWidth
                  defaultValue={""}
                  variant="outlined"
                  placeholder="Enter Your Country Name"
                  label="Select country"
                  margin="normal" 
                  onChange={(e)=>{
                        setValue("country",e.target.value, {shouldDirty:true})
                        let countryCode1 = "";
                          Country.getAllCountries().map((countryData) => {
                            if (countryData.name === e.target.value) {
                              setCountryCode(countryData.isoCode);
                              countryCode1 = countryData.isoCode;
                            }
                          });
                          enableStateDropDown(countryCode1);
                  } }
                >
                  {allCountries.map((countryName, i) => {
                    return (
                      <MenuItem value={`${countryName}`} key={`${i}`}>
                        {`${countryName}`}
                      </MenuItem>
                    );
                  })}
                </TextField>
              </>
            )}
          />

        {/* state */}

          <Controller
            rules={{required:true}}
            control={control}
            name="state"
            render={() => (
              <>
                <TextField
                  select
                  fullWidth
                  label="Select State"
                  variant="outlined"
                  margin="normal"
                  defaultValue={""}
                  required 
                  onChange={(e)=>{
                    setValue("state", e.target.value , {shouldDirty:true})
                        let stateCode1 = "";
                          State.getStatesOfCountry(`${countryCode}`).map(
                            (stateData) => {
                              if (stateData.name === e.target.value) {
                                stateCode1 = stateData.isoCode;
                              }
                            }
                          );
                          enableCityDropDown(stateCode1);
                  }}
                >
                  {allStates.map((stateName, j) => {
                    return (
                      <MenuItem
                        value={`${stateName.name}`}
                        key={`${j}`}
                      >{`${stateName.name}`}</MenuItem>
                    );
                  })}
                </TextField>
              </>
            )}
          />

        {/*   city */}

          <Controller
            rules={{ required: true }}
            control={control}
            name="city"
            render={({ field }) => (
              <TextField
                select
                fullWidth
                label="City Name"
                variant="outlined"
                margin="normal"
                {...field}
              >
                {allCity.map((cityName, k) => {
                          return (
                            <MenuItem
                              value={`${cityName.name}`}
                              key={`${k}`}
                            >{`${cityName.name}`}</MenuItem>
                          );
                })}
              </TextField>
            )}
          />
      {/*END :: String type Country state  city */}
        
      {/* BEGIN :: Terms and Condition Modal */}
      <Card
            elevation={0}
            style={{ backgroundColor: "transparent" }}
  
          >
                <Controller control={control}
                rules={{required:""}}
                name="termAndCondition" 
                render={({field})=>(
                  <>
                    <span
                        style={{ marginLeft: "300px", display: "flex", width: "350px" }}
                      >
                        <FormControlLabel
                          style={{ width: "35px" }}
                          {...field}
                          required
                          value="other"
                          checked={btnCondition}
                          onClick={() => {
                            setModel();
                            setModel(true);
                          }}
                          control={<Checkbox required />}
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
                  </>
                )}
                />
          </Card>
          <Card style={{ marginLeft: "300px" }}>
            {model && (
              <TermsConditions
                modelCondition={setModel}
                condition={setBtnCondition}
              />
            )}
          </Card>
      
      {/* END  :: Terms and Conditon Modal */}


    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;
    case 1:
      return <CompanyDeltails />;
    case 2:
      return <CompanyAddress />;
    default:
      return "unknown step";
  }
}

const MerchantSignup2 = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      emailAddress: "",
      phone: "",
      // company information
      commission: "",
      companyName: "",
      companyPhone: "",
      companyEmail: "",
      webAddress: "",
      gstn: "",
      registerNumber: "",
      // company Address
      buldingInfo: "",
      landmark: "",
      country: "",
      state: "",
      city: "",
      type: "",
      companyOthertype:"",
      pincode: "",
      streetInfo: "",
      termAndCondition:false
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [showBackdrop, setShowBackdrop] = useState(false);

  const handleNext = async (data) => {
    // console.log(data);
    let type1 =data.type    // Other verification
    let type2 = data.companyOthertype // if other then use this as  companType
    let customCompanyType ;
    // ? checking company type setting value in customCompanyType

    if(type1 === "Other" && type2 !== ""){
      customCompanyType = type2
    }else if(type1 !== "Other" ){
      customCompanyType = type1
    }

    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      email: data.emailAddress,
      phone: data.phone,
      commission: data.commission,
      role: ["MERCHANT"],
      company: {
        name: data.companyName,
        phone: data.companyPhone,
        email: data.companyEmail,
        webAddress: data.webAddress,
        gstn: data.gstn,
        registerNumber: data.registerNumber,
        address: {
          buldingInfo: data.buldingInfo,
          landmark: data.landmark,
          country: data.country,
          state: data.state,
          city: data.city,
          type: customCompanyType,
          pincode: data.pincode,
          streetInfo: data.streetInfo,
        },
      },
    };

    if (activeStep === steps.length - 1) {
      try {
        setShowBackdrop(true);
        let { data } = await Axios.post("/merchants", payload);
        toast.success(
          `Hey ${data.data.firstName} your Merchant ID is ${data.message}`
        );
        // console.log("Merchant registerd");
        setShowBackdrop(false);
        setActiveStep(activeStep + 1);
      } catch (error) {
        // console.log(error);
        let errMessage = error.response.data.data
        toast.error(errMessage);
        setShowBackdrop(false);
      }
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <div className={Styles.formCard}>
        <Typography align="center" variant="h4">
          Signup to become a Mechant
        </Typography>
        <div>
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((step, index) => {
              const labelProps = {};
              const stepProps = {};

              return (
                <Step {...stepProps} key={index}>
                  <StepLabel {...labelProps}>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          {activeStep === steps.length ? (
            <>
              <Alert severity="success">
                <AlertTitle>
                  <Typography variant="h5" align="center">
                    You Are Now Part of ShoppingKart Family
                  </Typography>
                </AlertTitle>
                <strong>Your Are Registerd Succefully...!</strong>
              </Alert>
              <Alert style={{ marginTop: "10px" }} severity="warning">
                <AlertTitle>
                  <Typography variant="h5" align="center">
                    Important Note
                  </Typography>
                </AlertTitle>
                Please Check your <strong>Mail box</strong> for verfication-{" "}
                <strong>
                  <a href="https://mail.google.com/">check it out!</a>
                </strong>
              </Alert>
            </>
          ) : (
            <>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleNext)} className={Styles.formContainer} >
                  {getStepContent(activeStep)}

                  <Box style={{display:"flex",justifyContent:"space-between", marginTop:"10px"}}>
                        
                        <Button className={classes.button} variant="contained" color="secondary" disabled={activeStep===0} onClick={handleBack} >Back</Button>

                        <Button
                          className={classes.button}
                          variant="contained"
                          color="primary"
                          // onClick={handleNext}
                          type="submit"
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                    </Box>
                </form>
              </FormProvider>
              <BackdropSpinner open={showBackdrop} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MerchantSignup2;
