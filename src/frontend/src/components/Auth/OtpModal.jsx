import { useRef, useEffect } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./InputOtp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
// import { useNavigate } from "react-router-dom";

const VerifyEmailOtpModal = ({ isOpen, onClose }) => {
  const modalRef = useRef();
  // const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 h-[100vh] m-0 bg-black/50 flex items-center justify-center z-[999] p-4">
      <div
        className="dark:bg-neutral-800 bg-white  rounded-lg w-full max-w-md shadow-xl"
        ref={modalRef}
      >
        <div className="flex flex-col space-y-6 p-6">
          <div className="w-full text-center">
            <label className="text-lg font-semibold dark:text-white text-neutral-900">
              Enter OTP
            </label>
          </div>

          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
            <InputOTPGroup className="w-full gap-2 justify-between">
              <InputOTPSlot
                index={0}
                className="w-12 h-12 dark:border-2 dark:border-neutral-600 rounded-md dark:bg-neutral-700 dark:text-white text-center"
              />
              <InputOTPSlot
                index={1}
                className="w-12 h-12 dark:border-2 dark:border-neutral-600 rounded-md dark:bg-neutral-700 dark:text-white text-center"
              />
              <InputOTPSlot
                index={2}
                className="w-12 h-12 dark:border-2 dark:border-neutral-600 rounded-md dark:bg-neutral-700 dark:text-white text-center"
              />
              <InputOTPSlot
                index={3}
                className="w-12 h-12 dark:border-2 dark:border-neutral-600 rounded-md dark:bg-neutral-700 dark:text-white text-center"
              />
              <InputOTPSlot
                index={4}
                className="w-12 h-12 dark:border-2 dark:border-neutral-600 rounded-md dark:bg-neutral-700 dark:text-white text-center"
              />
              <InputOTPSlot
                index={5}
                className="w-12 h-12 dark:border-2 dark:border-neutral-600 rounded-md dark:bg-neutral-700 dark:text-white text-center"
              />
            </InputOTPGroup>
          </InputOTP>

          <div className="flex justify-center items-center pt-4">
            <button
              type="submit"
              className="w-full py-2.5 px-4 text-white bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-md font-medium transition-colors"
            >
              Verify OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailOtpModal;
