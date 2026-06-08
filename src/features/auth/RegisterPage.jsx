import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerHandler, RegisterUser } from "./userSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const registerInput = useSelector(RegisterUser);
  const navigate = useNavigate();

  const inputHandler = (event) => {
    const { name, value } = event.target;
    dispatch(registerHandler({ [name]: value }));
  };

  const registerButton = (e) => {
    e.preventDefault();
    const {
      email,
      username,
      password,
      firstname,
      lastname,
      city,
      street,
      number,
      zipcode,
      lat,
      long,
      phone,
    } = registerInput;
    const data = {
      email,
      username,
      password,
      firstname,
      lastname,
      address: {
        city,
        street,
        number,
        zipcode,
        geolocation: {
          lat,
          long,
        },
      },
      phone,
    };
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        Swal.fire({
          title: "Register Success!!",
          text: "Please Login!",
          icon: "success",
        });
        navigate("/login");
      });
  };

  return (
    <div className="flex min-h-[80vh] flex-1 flex-col justify-center px-6 py-12 lg:px-8 animate-fade-in-up">
      <div className="sm:mx-auto sm:w-full sm:max-w-md glass-panel p-8 sm:p-10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)] relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-primary rounded-full mix-blend-screen filter blur-[60px] opacity-30 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-accent rounded-full mix-blend-screen filter blur-[60px] opacity-30 pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="flex flex-row justify-center mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight">
              <Link to={"/"} className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
                <img src="/logo.png" alt="TokoKita Logo" className="w-10 h-10 object-contain drop-shadow-md" />
                <div className="flex items-center gap-1">
                  <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">Toko</span>
                  <span className="text-slate-900 dark:text-white transition-colors duration-300">Kita</span>
                </div>
              </Link>
          </h1>
        </div>
          <h2 className="mb-8 text-center text-2xl font-bold leading-9 tracking-tight text-slate-800 dark:text-gray-100">
            Register Account
          </h2>

          <form className="space-y-6" onSubmit={registerButton} method="POST">
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium leading-6 text-slate-700 dark:text-gray-300 ml-1"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                id="firstname"
                name="firstname"
                type="text"
                autoComplete="firstname"
                onChange={inputHandler}
                required
                className="block w-full rounded-xl border-0 bg-white dark:bg-brand-secondary/50 py-3 px-4 text-slate-800 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-white/10 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6 transition-all"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium leading-6 text-slate-700 dark:text-gray-300 ml-1"
            >
              Last Name
            </label>
            <div className="mt-2">
              <input
                onChange={inputHandler}
                id="lastname"
                name="lastname"
                type="text"
                autoComplete="lastname"
                required
                className="block w-full rounded-xl border-0 bg-white dark:bg-brand-secondary/50 py-3 px-4 text-slate-800 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-white/10 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6 transition-all"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-slate-700 dark:text-gray-300 ml-1"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                onChange={inputHandler}
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="block w-full rounded-xl border-0 bg-white dark:bg-brand-secondary/50 py-3 px-4 text-slate-800 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-white/10 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6 transition-all"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-slate-700 dark:text-gray-300 ml-1"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={inputHandler}
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="block w-full rounded-xl border-0 bg-white dark:bg-brand-secondary/50 py-3 px-4 text-slate-800 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-white/10 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6 transition-all"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-slate-700 dark:text-gray-300 ml-1"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                onChange={inputHandler}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-xl border-0 bg-white dark:bg-brand-secondary/50 py-3 px-4 text-slate-800 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-white/10 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6 transition-all"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-slate-700 dark:text-gray-300 ml-1"
            >
              City
            </label>
            <div className="mt-2">
              <input
                onChange={inputHandler}
                id="city"
                name="city"
                type="text"
                autoComplete="city"
                required
                className="block w-full rounded-xl border-0 bg-white dark:bg-brand-secondary/50 py-3 px-4 text-slate-800 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-white/10 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6 transition-all"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="street"
              className="block text-sm font-medium leading-6 text-slate-700 dark:text-gray-300 ml-1"
            >
              Street
            </label>
            <div className="mt-2">
              <input
                onChange={inputHandler}
                id="street"
                name="street"
                type="text"
                autoComplete="street"
                required
                className="block w-full rounded-xl border-0 bg-white dark:bg-brand-secondary/50 py-3 px-4 text-slate-800 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-white/10 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6 transition-all"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium leading-6 text-slate-700 dark:text-gray-300 ml-1"
            >
              Number
            </label>
            <div className="mt-2">
              <input
                onChange={inputHandler}
                id="number"
                name="number"
                type="number"
                autoComplete="number"
                required
                className="block w-full rounded-xl border-0 bg-white dark:bg-brand-secondary/50 py-3 px-4 text-slate-800 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-white/10 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6 transition-all"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="zipcode"
              className="block text-sm font-medium leading-6 text-slate-700 dark:text-gray-300 ml-1"
            >
              Zip Code
            </label>
            <div className="mt-2">
              <input
                onChange={inputHandler}
                id="zipcode"
                name="zipcode"
                type="zipcode"
                autoComplete="zipcode"
                required
                className="block w-full rounded-xl border-0 bg-white dark:bg-brand-secondary/50 py-3 px-4 text-slate-800 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-white/10 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6 transition-all"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lat"
              className="block text-sm font-medium leading-6 text-slate-700 dark:text-gray-300 ml-1"
            >
              Geolocation latitude
            </label>
            <div className="mt-2">
              <input
                onChange={inputHandler}
                id="lat"
                name="lat"
                type="text"
                autoComplete="lat"
                required
                className="block w-full rounded-xl border-0 bg-white dark:bg-brand-secondary/50 py-3 px-4 text-slate-800 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-white/10 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6 transition-all"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="long"
              className="block text-sm font-medium leading-6 text-slate-700 dark:text-gray-300 ml-1"
            >
              Geolocation longitude
            </label>
            <div className="mt-2">
              <input
                onChange={inputHandler}
                id="long"
                name="long"
                type="text"
                autoComplete="long"
                required
                className="block w-full rounded-xl border-0 bg-white dark:bg-brand-secondary/50 py-3 px-4 text-slate-800 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-white/10 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6 transition-all"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-slate-700 dark:text-gray-300 ml-1"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                onChange={inputHandler}
                id="phone"
                name="phone"
                type="phone"
                autoComplete="phone"
                required
                className="block w-full rounded-xl border-0 bg-white dark:bg-brand-secondary/50 py-3 px-4 text-slate-800 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-white/10 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6 transition-all"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent px-3 py-3 text-sm font-semibold leading-6 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-all transform active:scale-95"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-slate-600 dark:text-gray-400">
          Have an account?{" "}
          <Link to="/login">
            <span className="font-semibold leading-6 text-brand-primary hover:text-brand-accent transition-colors">
              Sign In
            </span>
          </Link>
        </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
