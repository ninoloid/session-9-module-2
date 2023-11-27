import { Formik } from "formik";
import * as Yup from "yup";
import RegisterForm from "./RegisterForm";
import { useDispatch } from "react-redux";
import { addUser, insertUserIntoDatabase } from "../features/users/userReducer";

export default function Register() {
  const dispatch = useDispatch();

  const formikInitialValue = { name: "", email: "", password: "" };

  const passwordValidationSchema = Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
      "Password must contain at least one lowercase, one uppercase, one number, and one symbol"
    );

  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(6, "Name must be at least 6 characters"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: passwordValidationSchema,
  });

  const insertData = ({ name, email, password }) => {
    const modifiedPayload = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: password.trim(),
    };
    dispatch(addUser(modifiedPayload));
    dispatch(insertUserIntoDatabase(modifiedPayload));
  };

  return (
    <div>
      <Formik
        initialValues={formikInitialValue}
        validationSchema={registerSchema}
        onSubmit={(values, actions) => {
          insertData(values);
          actions.resetForm({
            values: {
              name: "",
              email: "",
              password: "",
            },
          });
        }}
      >
        {() => {
          return <RegisterForm />;
        }}
      </Formik>
    </div>
  );
}
