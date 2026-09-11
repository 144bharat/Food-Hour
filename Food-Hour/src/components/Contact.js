import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Name should be atleast 2 character long!')
        .max(20, 'Name should be maximum 20 character or less!')
        .required('Name is required')
        .matches(/[a-zA-Z]/, 'Name must contain at least one letter'),

      email: Yup.string()
        .email('Please insert proper email address email-name@example.com')
        .required('Email is required'),

      phoneNumber: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]+$/, 'Phone number must contain only digits')
        .min(10, 'Phone number must be at least 10 digits')
        .max(15, 'Phone number must not exceed 15 digits'),

      message: Yup.string()
        .min(2, 'Message should be atleast 2 character long!')
        .max(200, 'Message should be maximum 200 character or less!')
        .required('Message is required'),
    }),
  });

  return (
    <>
      <div className="flex items-center justify-center p-6">
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-4xl p-10">
          {/* Header */}
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 mb-10">
            We’d love to hear from you! Fill out the form below and we’ll get
            back to you as soon as possible.
          </p>

          {/* Form */}
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  autoComplete="off"
                />
                {formik.errors.name && formik.touched.name ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <div className="w-full flex flex-col">
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  autoComplete="off"
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="w-full flex flex-col">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                autoComplete="off"
              />
              {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.phoneNumber}
                </div>
              ) : null}
            </div>

            <div className="w-full flex flex-col">
              <textarea
                placeholder="Your Message"
                name="message"
                rows="5"
                className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                autoComplete="off"
              ></textarea>
              {formik.errors.message && formik.touched.message ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.message}
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-orange-400 to-blue-400 text-white font-bold py-3 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Connect Section */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Connect with me:
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href="tel:+917982546858"
                className="flex items-center gap-2 text-indigo-600 hover:text-pink-600 font-medium transition"
              >
                📞 Call: +91 798 254 6858
              </a>
              <a
                href="mailto:bharatgautamofficial@gmail.com"
                className="flex items-center gap-2 text-indigo-600 hover:text-pink-600 font-medium transition"
              >
                ✉️ Email: bharatgautamofficial@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
