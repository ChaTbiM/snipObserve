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
import { IonContent, IonPage, IonLabel, IonInput, IonItem } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonPage,
    IonLabel,
    IonInput,
    IonItem
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    loginHandler() {
      const data = { email: this.email, password: this.password };

      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(token => {
          this.$store.commit("AUTH_SUCCESS", token);
          return token;
        })
        .then(token => {
          this.$router.push("/groups");

          localStorage.setItem("token", token);
        });
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