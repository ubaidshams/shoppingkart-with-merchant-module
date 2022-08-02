import React, { useState } from "react";
import style from "./signup.module.css";
import Typography from '@mui/material/Typography';
import {
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";


const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "User information",
    "Company Information",
    "Company Address",
  ];
}

const BasicForm = () => {
  const { control } = useFormContext();

  console.log(control)
  return (
    <>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
              control={control}
              name="emailAddress"
              render={({ field }) => (
                <TextField
                  id="email"
                  label="E-mail"
                  variant="outlined"
                  placeholder="Enter Your E-mail Address"
                  fullWidth
                  margin="normal"
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <TextField
                  id="phone-number"
                  label="Phone Number"
                  variant="outlined"
                  placeholder="Enter Your Phone Number"
                  fullWidth
                  margin="normal"
                  {...field}
                />
              )}
            />
        <FormControl component="fieldset">
            <Controller
              rules={{ required: true }}
              control={control}
              name="gender"
              render={({ field }) => (
                <RadioGroup {...field}>
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              )}
            />
        </FormControl>

    </>
  );
};
const CompanyDeltails = () => {
  const { control } = useFormContext();
  return (
    <>
    <Controller
        control={control}
        name="companyName"
        render={({ field }) => (
          <TextField
            id="companyName"
            label="Company Name"
            variant="outlined"
            placeholder="Enter Your Company Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="companyEmail"
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="companyPhone"
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="gstn"
        render={({ field }) => (
          <TextField
            id="gstn"
            label="GSTN"
            variant="outlined"
            placeholder="Enter Your GSTN"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="registerNumber"
        render={({ field }) => (
          <TextField
            id="registerNumber"
            label="register Number"
            variant="outlined"
            placeholder="Enter Your register Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="webAddress"
        render={({ field }) => (
          <TextField
            id="webAddress"
            label="web Address"
            variant="outlined"
            placeholder="Enter Your web Address"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="commission"
        render={({ field }) => (
          <TextField
            id="commission"
            label="commission"
            variant="outlined"
            placeholder="Enter Your commission"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const CompanyAddress = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="buldingInfo"
        render={({ field }) => (
          <TextField
            id="buldingInfo"
            label="Bulding Information"
            variant="outlined"
            placeholder="Bulding no/ House no"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="landmark"
        render={({ field }) => (
          <TextField
            id="landmark"
            label="Landmark"
            variant="outlined"
            placeholder="Enter landmark"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="streetInfo"
        render={({ field }) => (
          <TextField
            id="streetInfo"
            label="Street Info"
            variant="outlined"
            placeholder="Enter streetInfo"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      
      <Controller
        control={control}
        name="pincode"
        render={({ field }) => (
          <TextField
            id="pincode"
            label="Pincode"
            variant="outlined"
            placeholder="Enter pincode"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      {/* <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      /> */}
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
    // case 4:
    //   return <PaymentForm />;
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
      role:["MERCHANT"],
      // company information
      commission:"",
      companyName :"",
      companyPhone: "",
      companyEmail:"",
      webAddress:"",
      gstn:"",
      registerNumber:"",
      // company Address
      buldingInfo: "",
      landmark: "",
      country: "",
      state:"",
      city:"",
      type:"",
      pincode:"",
      streetInfo:"",
      // extra
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);

  const steps = getSteps();

  

  

  const handleNext = (data) => {
    console.log(data);
    console.log("actvie" + activeStep)
    console.log("step" + steps.length -1)
    console.log(activeStep === steps.length - 1)

    if (activeStep === steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  

  return (<>
  <div className={style.formCard}>
    <Typography align="center" variant="h4">Signup to become a Mechant</Typography>
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
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  </div>
  </>  
  )
}


export default MerchantSignup2
