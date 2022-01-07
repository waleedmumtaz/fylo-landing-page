<script>
  let hidden = true

  const validateEmail = (e) => {
    let email = e.target.email.value
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    hidden = re.test(email)
  }
</script>

<main>
  <div class="font-open-sans">
    <!-- Hero -->
    <div
      class="p-5 md:p-16 md:grid md:grid-cols-2 md:place-items-center md:gap-10"
    >
      <div class="order-last">
        <img
          src="/assets/illustration-1.svg"
          alt="illustration"
          class="mt-10"
        />
      </div>
      <div>
        <h1
          class="font-bold text-2xl md:text-5xl text-center md:text-left my-6"
        >
          All your files in one secure location, accessible anywhere.
        </h1>
        <p class="text-center md:text-left mb-8 md:text-xl">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <form
          on:submit|preventDefault={validateEmail}
          class="font-raleway flex flex-col md:flex-row md:items-center md:gap-5"
        >
          <input
            type="text"
            name="email"
            placeholder="Enter your email..."
            class="px-6 py-3 border border-cstm-primary-dark-blue rounded-md shadow focus:outline-cstm-primary-desaturated-blue md:flex-1 text-black"
          />
          <p
            class={`${hidden ? 'hidden' : 'block'} text-red-500 mt-2 md:hidden`}
          >
            Please enter a valid email
          </p>
          <button
            type="submit"
            value="submit"
            class="bg-cstm-accent-bright-blue text-white font-bold rounded-md py-3 shadow hover:brightness-125 mt-5 md:mt-0 md:px-16"
            >Get Started</button
          >
        </form>
        <p class={`${hidden ? 'hidden' : 'md:block'} text-red-500 mt-2 hidden`}>
          Please enter a valid email
        </p>
      </div>
    </div>

    <!-- Stay productive -->
    <div class="mt-20">
      <img
        src="/assets/bg-curve-mobile.svg"
        alt="curve design"
        class="w-full md:hidden"
      />
      <img
        src="/assets/bg-curve-desktop.svg"
        alt="curve hidden"
        class="w-full hidden md:block"
      />
      <div
        class="bg-cstm-neutral-light-grayish-blue px-5 md:px-16 py-20 md:grid md:grid-cols-2 md:gap-10"
      >
        <div class="md:order-last">
          <img src="/assets/illustration-2.svg" alt="illustration" />
        </div>
        <div>
          <h2
            class="text-center md:text-left font-bold text-xl md:text-4xl mt-20 mb-8"
          >
            Stay productive, wherever you are
          </h2>
          <p class="text-cstm-primary-desaturated-blue text-xl mb-5">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p class="text-cstm-primary-desaturated-blue text-xl">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>
          <div class="py-20 md:py-10">
            <div
              class="flex gap-2 items-center text-xl text-cstm-accent-moderate-cyan border-b border-cstm-accent-moderate-cyan w-fit mx-auto md:mx-0 hover:opacity-75"
            >
              <a href="/#">See how Fylo works</a>
              <img src="/assets/icon-arrow.svg" alt="arrow icon" class="w-6" />
            </div>
          </div>

          <!-- Review card -->
          <div class="bg-white rounded-md shadow p-6 md:max-w-md">
            <img src="/assets/icon-quotes.svg" alt="quotes icon" class="w-5" />
            <p class="my-5">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div class="flex items-center gap-5">
              <img
                src="/assets/avatar-testimonial.jpg"
                alt="avatar"
                class="w-10 rounded-full"
              />
              <div>
                <p class="font-bold">Kyle Burton</p>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Get early access -->
    <div
      class="font-raleway text-center md:text-left text-white bg-cstm-primary-desaturated-blue px-5 md:px-16 py-20 md:grid md:grid-cols-2 md:gap-20"
    >
      <div>
        <p class="text-xl md:text-4xl font-bold">Get early access today</p>
        <p class="text-xl my-8">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <div>
        <form
          on:submit|preventDefault={validateEmail}
          class="font-raleway flex flex-col"
        >
          <input
            type="text"
            name="email"
            placeholder="email@example.com"
            class="px-6 py-3 border border-cstm-primary-dark-blue rounded-md shadow focus:outline-cstm-primary-desaturated-blue text-black"
          />
          <p
            class={`${hidden ? 'hidden' : 'block'} text-red-500 font-bold mt-1`}
          >
            Please enter a valid email
          </p>
          <button
            type="submit"
            value="submit"
            class="bg-cstm-accent-bright-blue text-white font-bold rounded-md py-3 mt-5 shadow hover:brightness-125 md:max-w-xs"
            >Get Started For Free</button
          >
        </form>
      </div>
    </div>
  </div>
</main>
