<template>
  <div>
    <section class="contact" id="contact">
      <div class="container">
        <div class="row text-center">
          <h3 class="medium-header" data-aos="fade-up" data-aos-delay="100">
            Contact Me
          </h3>
          <p
            class="text-center"
            data-aos="fade-up"
            data-aos-delay="100"
            style="
              color: #2447f9;
              font-weight: bold;
              text-decoration: underline;
            "
          >
            Send me message if you have any questions
          </p>
        </div>
        <div class="row form">
          <div class="col-lg-10 offset-lg-1">
            <div class="row">
              <div class="col-lg-12 booking-form align-self-center">
                <form @submit.prevent="submitForm">
                  <div class="mb-16" data-aos="fade-up" data-aos-delay="200">
                    <input
                      type="text"
                      name="name"
                      id=""
                      class="form-control"
                      placeholder="Complete Name"
                      v-model="name"
                      required
                    />
                  </div>
                  <div class="mb-16" data-aos="fade-up" data-aos-delay="300">
                    <input
                      type="email"
                      name="email"
                      id=""
                      class="form-control"
                      placeholder="Email Address"
                      v-model="email"
                      required
                    />
                  </div>
                  <div class="mb-30" data-aos="fade-up" data-aos-delay="400">
                    <textarea
                      placeholder="Write your Message"
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      class="form-control"
                      v-model="message"
                      required
                    ></textarea>
                  </div>
                  <button
                    class="w-100 btn btn-primary"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    {{ isLoading ? "Loading..." : "Send Message" }}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Swal from "sweetalert2";
const config = useRuntimeConfig();

const name = ref("");
const email = ref("");
const message = ref("");
const isLoading = ref(false);

const swalFire = (icon, title, message) => {
  Swal.fire({
    title: title,
    text: message,
    icon: icon,
    confirmButtonText: "Oke",
  });
};

const submitForm = async () => {
  isLoading.value = true;

  if (!name.value.trim() || !email.value.trim() || !email.value) {
    swalFire("error", "Oops...", "Please fill all data!");
    isLoading.value = false;
    return;
  }

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (email.value && !regex.test(email.value)) {
    swalFire("error", "Oops...", "Email not valid!");
    isLoading.value = false;
    return;
  }

  setTimeout(() => {
    let texts = `Halo, ada pesan dari ${name.value}%0AEmail : ${email.value}%0APesan : ${message.value}`;

    const telegramURL = `https://api.telegram.org/bot${config.public.TELE_TOKEN}/sendMessage?chat_id=${config.public.TELEGRAM_ID_TARGET}&text=${texts}&parse_mode=html`;

    try {
      $fetch(telegramURL);
      swalFire("success", "Yeay...", "Terkirim!");
    } catch (error) {
      swalFire("error", "Oops...", "Mbo ramudeng! : ");
    }
    isLoading.value = false;
  }, 1000);
};
</script>

<style></style>
