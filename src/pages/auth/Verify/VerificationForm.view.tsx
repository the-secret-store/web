import { Button, Input } from '@components';
import { useFormik } from 'formik';
import * as yup from 'yup';

export function VerificationForm() {
  const formik = useFormik({
    initialValues: {
      otp: ''
    },
    validationSchema: yup.object({
      otp: yup
        .string()
        .min(6, 'Invalid OTP')
        .max(6, 'Invalid OTP')
        .required('OTP is required')
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        label='Verification code'
        name='otp'
        onChange={formik.handleChange}
        value={formik.values.otp}
        tip={formik.touched.otp ? formik.errors.otp : ''}
      />
      <Button label='Verify' type='submit' />
    </form>
  );
}
