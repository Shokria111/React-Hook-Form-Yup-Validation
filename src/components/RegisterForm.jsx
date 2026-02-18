import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../validations/registerSchema";
import TermsConditions from "./terms&conditions";


export default function RegisterForm({ onSwitchToLogin }) {

  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");

  const {register, handleSubmit, reset, formState: {errors, isValid, isSubmitting }} = useForm({
    resolver: yupResolver(registerSchema),   //formstate has the above objects that takes form useform
    mode: "onTouched" });//when we touch that name email value, if did not writeemail, gives error


  function onSubmit(data) {
    console.log("REGISTER SUBMIT:", {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    });
    setSuccess("✅Registration Successful!.");
  }

  function handleReset() {
    reset();
    setShowPassword(false);
    setSuccess("");
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      {success && <div className="success">{success}</div>}

      <div className="field">
        <label htmlFor="reg-fullname">Full Name</label>
        <input
          id="reg-fullname"
          name="fullName"
          type="text"
          placeholder="Your full name"
          {...register("fullName")}
          autoComplete="name"
        />
        { errors.fullName && <div className="error">{errors.fullName.message}</div>}
      </div>

      <div className="field">
        <label htmlFor="reg-email">Email</label>
        <input
          id="reg-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          autoComplete="email"
        />
        {errors.email && <div className="error">{errors.email.message}</div>}
      </div>

      <div className="field">
        <label htmlFor="reg-password">Password</label>
        <input
          id="reg-password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          {...register("password")}
          autoComplete="new-password"
        />
        <div className="helpRow">
          <label className="row small" style={{ cursor: "pointer" }}>
            <input
              className="checkbox"
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            Show password
          </label>
          <span className="small">Min 8 characters</span>
        </div>
        {errors.password && <div className="error">{errors.password.message}</div>}
      </div>

      <div className="field">
        <label htmlFor="reg-confirm">Confirm Password</label>
        <input
          id="reg-confirm"
          name="confirmPassword"
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          {...register("confirmPassword")}
          autoComplete="new-password"
        />
        {errors.confirmPassword && (
          <div className="error">{errors.confirmPassword.message}</div>
        )}
      </div>

      <TermsConditions ></TermsConditions>
      <div className="helpRow">
        <label className="row small">
          <input
            type="checkbox"
            {...register("terms")}
          />
          I agree to the Terms & Conditions
        </label>
      </div>

      {errors.terms && (
        <div className="error">{errors.terms.message}</div>
      )}




          
      <div className="actions">
        <button className="primary" type="submit" disabled={!isValid || isSubmitting}> {/*the button gets disabled if form is not valid or already clicked and is in the process of updating */}
          Create account
        </button>
        <button className="ghost" type="button" onClick={handleReset}>
          Reset
        </button>
        <p className="small" style={{ margin: 0 }}>
          Already have an account?{" "}
          <button className="ghost" type="button" onClick={onSwitchToLogin}>
            Login
          </button>
        </p>
      </div>
    </form>
  );
}
