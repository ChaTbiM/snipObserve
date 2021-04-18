<template>
  <ion-page>
    <ion-content :fullscreen="true" class="content">
      <div class="container">
        <ion-card class="login__card">
          <ion-card-content class="login__card__content">
            <ion-item class="input__email">
              <ion-label position="floating">email</ion-label>
              <ion-input
                v-model="email"
                class="login__input "
                clear-input
                type="email"
                placeholder="enter email"
              ></ion-input>
            </ion-item>
            <ion-item class=" input__password">
              <ion-label position="floating">password</ion-label>
              <ion-input
                v-model="password"
                class="login__input "
                clear-input
                type="password"
                placeholder="enter password"
              ></ion-input>
            </ion-item>

            <ion-button
              @click="loginHandler"
              expand="block"
              color="button"
              class="login__button"
              >login</ion-button
            >
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script >
import { defineComponent } from "vue";
import "@capacitor-community/http";
import { Plugins } from "@capacitor/core";

export default defineComponent({
  name: "Home",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async loginHandler() {
      const requestData = { email: this.email, password: this.password };
      const { Http } = Plugins;
      const { data, status } = await Http.request({
        method: "POST",
        url: "http://localhost:3000/login",
        headers: {
          "Content-Type": "application/json"
        },
        data: { ...requestData }
      });

      if (status === 200 && data.success) {
        this.$store.commit("AUTH_SUCCESS", data.data);
        localStorage.setItem("token", data.data);
        this.$router.push("/groups");
      }
    }
  }
});
</script>

<style  scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);

  display: flex;
  justify-content: center;
  align-items: center;
}

.login__card {
  flex-basis: 90%;
  background-color: var(--primary-color-dark);
  color: white;
}

.login__card__content {
  margin: 4rem 0;
}
.input__password,
.login__button {
  margin-top: 1rem;
}

.login__button {
  color: white;
  background-color: var(--secondary-color);
}
</style>