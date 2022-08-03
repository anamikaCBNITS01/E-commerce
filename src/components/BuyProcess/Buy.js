import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import styles from './style.module.css'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const steps = [
    {
        label: 'Login OR Sign-UP',
        description: <div><TextField className={styles.InputField} id="standard-basic" label="Enter Email/Phone Number" variant="standard" /><br />
            <TextField className={styles.InputField} id="standard-basic" label="Enter Password" variant="standard" /></div>,
    },
    {
        label: 'Delivery Address',
        description:
            <div>
                <TextField className={styles.InputField} id="outlined-basic" label="Full Name" variant="outlined" />
                <TextField className={styles.InputField} id="outlined-basic" label="Enter Number" variant="outlined" /><br />
                <TextField className={styles.InputField} id="outlined-basic" label="City" variant="outlined" />
                <TextField className={styles.InputField} id="outlined-basic" label="State" variant="outlined" /><br />
                <TextField className={styles.InputField} id="outlined-basic" label="Landmark" variant="outlined" />
                <TextField className={styles.InputField} id="outlined-basic" label="Address" variant="outlined" />
            </div>
    },
    {
        label: 'Order Summary',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
    },
    {
        label: 'Payement Option',
        description:
            <div>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"><h2>Payement Options</h2></FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Phone Pay" endAdornment={<AccountBalanceIcon/>}/>
                        <FormControlLabel value="male" control={<Radio />} label="Google Pay" />
                        <FormControlLabel value="other" control={<Radio />} label="Net Banking" />
                    </RadioGroup>
                </FormControl>
            </div>,
    }
];

export default function BuyProccessStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box className={styles.StepperBox}>
            <Stepper activeStep={activeStep} orientation="vertical" className={styles.stepper}>
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === 3 ? (
                                    <Typography variant="caption">Last step</Typography>
                                ) : null
                            }
                        >
                            <Box className={styles.labels}>
                                {step.label}
                            </Box>
                        </StepLabel>
                        <StepContent>
                            <Typography>
                                {step.description}
                            </Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}

                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
        </Box>
    );
}
