// @ts-nocheck
import React from 'react';
import {
  Typography, Container, Paper, TextField, Button,
} from '@mui/material';
import { useFormik, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createFieldAction } from '../../store/features/fields/fields-action-creators';

const validationSchema = Yup.object({
  title: Yup.string()
    .required('Required field')
    .min(2, 'At least two characters required')
    .max(32, '32 characters at most')
    .matches(/^[aA-zZ\s]+$/, 'Please only use Latin alphabet and spacing'),
});

const FieldCreationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    title: '',
  };

  const handleCreateField = (title) => {
    const createField = createFieldAction(title);
    dispatch(createField);
    navigate('/category-creation');
  };

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleCreateField,
  });

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Paper sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        py: '2rem',
      }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center', mb: '2rem' }}>
          Field Creation
        </Typography>
        <Container>
          <Formik>
          <Form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
            onSubmit={handleSubmit}
          >
            <TextField
            name='title'
            type="text"
            label="Field title"
            value={values.title}
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title ? touched.title && errors.title : null}
            />
            <Button type="submit" variant="outlined" sx={{
              ':hover': {
                color: 'primary.dark',
              },
            }}>Create New Field</Button>
          </Form>
          </Formik>
        </Container>
      </Paper>
    </Container>
  );
};

export default FieldCreationPage;
