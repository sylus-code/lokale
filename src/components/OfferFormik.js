import React, {Component} from 'react';
import {Formik, Field, Form} from 'formik';

class OfferFormik extends Component {

    sendEmail(values, {resetForm}) {
        fetch('/mail', {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'success') {
                alert("Wiadomość została wysłana.");
                resetForm({values: ''});
            } else if (response.status === 'error') {
                alert("Nie udało się wysłać wiadomości. Sprawdź poprawność danych.")
            }
        }).catch(error => {
            console.error('Nie da się zrobić sukcesu', error);
        })
    }

    validateEmail(value) {
        let error;
        if (!value) {
            error = 'Wpisz adres email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Nieprawidłowy adres e-mail';
        }
        return error;
    }

    validateUsername(value) {
        let error;
        if (value === 'admin' || value === 'Admin') {
            error = 'Nieźle! ale nie tym razem ;)';
        }
        if (!value) {
            error = 'Wpisz swoje imię';
        } else if (!/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/.test(value)) {
            error = 'Niepoprawna wartość';
        }
        return error;
    }

    render() {
        const initialValues = {
            name: '',
            email: '',
            tel: '',
            field: '',
            localisation: '',
            budget: ''
        };
        return (
            <section className="text-dark text-center mt-5" id='contact'>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters">
                        <div className=" col-xl-9 mx-auto mt-3">
                            <h1 className="mb-4 text-uppercase">Wyślij zapytanie o aktualną ofertę</h1>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-8 mx-auto mb-5 mt-3">

                            <Formik
                                initialValues={initialValues}
                                onSubmit={async (values, {resetForm}) => {
                                    await new Promise((r) => setTimeout(r, 500));
                                    this.sendEmail(JSON.stringify(values, {resetForm}));

                                }}
                            >
                                {({errors, touched, validateField, validateForm}) => (
                                    <Form>

                                        <h4 className="font-weight-light text-uppercase mt-4">Twoje dane
                                            kontaktowe:</h4>
                                        <div className="form-row pb-4 mt-4">
                                            <div className="col-12 col-md-3 mb-2">
                                                <Field id="name"
                                                       name="name"
                                                       type="text"
                                                       className="form-control form-control btn-outline-warning"
                                                       placeholder="Imię..."
                                                       validate={(value) => this.validateUsername(value)} required/>
                                                {errors.name && touched.name && <div>
                                                    <small
                                                        className='alert-danger border border-danger mt-1 p-1 rounded-bottom'>{errors.name}</small>
                                                </div>}
                                            </div>
                                            <div className="col-12 col-md-6 mb-2">
                                                <Field id="email"
                                                       name="email"
                                                       type="email"
                                                       className="form-control form-control btn-outline-warning"
                                                       placeholder="Adres email..."
                                                       validate={(value) => this.validateEmail(value)} required/>
                                                {errors.email && touched.email && <div>
                                                    <small
                                                        className='alert-danger border border-danger mt-1 p-1 rounded-bottom'>{errors.email}</small>
                                                </div>}

                                            </div>
                                            <div className="col-12 col-md-3 mb-2">
                                                <Field id="tel" name="tel" type="tel"
                                                       className="form-control form-control btn-outline-warning"
                                                       placeholder="Numer telefonu..."/>
                                            </div>

                                        </div>

                                        <h4 className="font-weight-light text-uppercase mt-4">Czego szukasz:</h4>
                                        <div className="form-row mt-4">
                                            <div className="col-12 col-md-3 mb-2">
                                                <Field id="budget" name="budget" type="text"
                                                       className="form-control form-control btn-outline-warning"
                                                       placeholder="Budżet..."/>
                                            </div>
                                            <div className="col-12 col-md-6 mb-2">
                                                <Field id="localisation" name="localisation" type="text"
                                                       className="form-control form-control btn-outline-warning"
                                                       placeholder="Lokalizacja..."/>
                                            </div>
                                            <div className="col-12 col-md-3 mb-2">
                                                <Field id="field" name="field" type="text"
                                                       className="form-control form-control btn-outline-warning"
                                                       placeholder="Powierzchnia w m&sup2;..."/>
                                            </div>
                                        </div>
                                        <div className="input-group mb-3 mt-3">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <Field id="firstHand" name="firstHand" type="checkbox"/>
                                                </div>
                                            </div>
                                            <label htmlFor="firstHand"
                                                   className="form-control text-left text-secondary list-group-item-warning">Rynek
                                                pierwotny/deweloperski</label>

                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <Field id="secondHand" name="secondHand" type="checkbox"/>
                                                </div>
                                            </div>
                                            <label htmlFor="secondHand"
                                                   className="form-control text-left text-secondary list-group-item-warning">Rynek
                                                wtórny</label>
                                        </div>

                                        <div className=" col-md-4 mx-md-auto mt-5">
                                            <button type="submit" className="btn  btn-block btn-lg btn-warning"
                                                    onSubmit={() => validateForm().then(() => console.log('walidation complete'))}>Wyślij
                                            </button>
                                        </div>

                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OfferFormik;