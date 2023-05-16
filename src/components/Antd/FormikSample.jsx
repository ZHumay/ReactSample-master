import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

function FormikSample() {
    let navigate = useNavigate();
    const addProductValidationSchema = Yup.object().shape({
        companyName: Yup.string()
            .required("companyName alanı boş bırakılamaz!"),
        contactName: Yup.string()
            .required("contactName boş bırakılamaz"),
        contactTitle: Yup.string()
            .required("companyTitle alanı boş bırakılamaz!"),
        address: Yup.object().shape({
            city: Yup.string()
                .required("city alanı boş bırakılamaz!")
        })
    })

    const SubmiteClick = (values) => {
        axios.post("https://northwind.vercel.app/api/categories", values)
          .then(res => {
            navigate("/");
          })
          .catch(error => {
            console.log(error);
          });
      };

    const formik = useFormik({
        initialValues: {
            companyName: '',
            contactName: '',
            contactTitle: '',
            address: {
                city: ''
            }
        },
        validationSchema: addProductValidationSchema,
        onSubmit: values => {
            console.log(values);

            axios.post("https://northwind.vercel.app/api/categories", values)
                .then(response => {
                    console.log(response);
                });
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <>
                    <div>
                        <label htmlFor="companyName">companyName</label>
                        <input id="companyName" name="companyName" type="text" onChange={formik.handleChange} value={formik.values.companyName} />
                        <p style={{ color: 'red' }}>{formik.errors?.companyName}</p>
                    </div>
                    <div>
                        <label htmlFor="contactName">contactName</label>
                        <input id="contactName" name="contactName" type="text" onChange={formik.handleChange} value={formik.values.contactName} />
                        <p style={{ color: 'red' }}>{formik.errors?.contactName}</p>
                    </div>
                    <div>
                        <label htmlFor="contactTitle">contactTitle</label>
                        <input id="contactTitle" name="contactTitle" type="text" onChange={formik.handleChange} value={formik.values.contactTitle} />
                        <p style={{ color: 'red' }}>{formik.errors?.contactTitle}</p>
                    </div>
                    <div>
                        <label htmlFor="city">city</label>
                        <input id="city" name="address.city" type="text" onChange={formik.handleChange} value={formik.values.address.city} />
                        <p style={{ color: 'red' }}>{formik.errors?.address?.city}</p>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </>
            </form>
        </>
    )
}

export default FormikSample;