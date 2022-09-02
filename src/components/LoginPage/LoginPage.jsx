import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function LoginPage() {
  const history = useHistory();

  return (
    <section class="h-full">
      <div className="md:pt-32 md:pb-32 sm:pt-20 sm:pb-20 md:pt-20 md:pb-20 pb-12 pt-12 bg-orange-200  mb-16">
        <h3 className="text-xl text-center text-black mb-4">Why work with us? </h3>
          <li className="text-center text-black mb-1">We're your strategic growth partner</li>
          <li className="text-center text-black mb-1">Financial professionals spend a bulk of their time prospecting.</li>
          <li className="text-center text-black mb-1">By working with us, you'll spend less time marketing yourself, and more time advising your clients.</li>
        <h3 className="text-xl text-center text-black mt-6">BlueVest has helped some of the biggest names in financial services grow their brand and practice.</h3>
      </div>
      <div class="px-8 h-full text-gray-800">
        <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div class="grow-0 shrink-1 md:shrink-1 basis-auto 2xl:w-5/12 xl:w-6/10 lg:w-6/12 md:w-7/12 md:mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="w-full"
              alt="Sample image"
            />
          </div>
        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 md:mb-0">
            <LoginForm/>
          <div
            class="flex items-center before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p class="text-center text-black font-semibold mx-4 mb-0">OR</p>
          </div>


          <div class="">
            <RegisterForm/>
          </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default LoginPage;
